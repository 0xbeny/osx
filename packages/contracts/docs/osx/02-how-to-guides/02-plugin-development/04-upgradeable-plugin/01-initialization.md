---
title: Intialization
---

## How to Initialize Upgradeable Plugins

To deploy your implementation contract via the [UUPS pattern (ERC-1822)](https://eips.ethereum.org/EIPS/eip-1822), you inherit from the `PluginUUPSUpgradeable` contract.

We must protect it from being set up multiple times by using [OpenZepplin's `initializer` modifier made available through `Initalizable`](https://docs.openzeppelin.com/contracts/4.x/api/proxy#Initializable). In order to do this, we will call the internal function `__PluginUUPSUpgradeable_init(IDAO _dao)` function available through the `PluginUUPSUpgradeable` base contract to store the `IDAO _dao` reference in the right place.

:::note
This has to be called - otherwise, anyone else could call the plugin's initialization with whatever params they wanted.
:::

```solidity
// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.17;

import {PluginUUPSUpgradeable, IDAO} '@aragon/osx/core/plugin/PluginUUPSUpgradeable.sol';

/// @title SimpleStorage build 1
contract SimpleStorageBuild1 is PluginUUPSUpgradeable {
  uint256 public number; // added in build 1

  /// @notice Initializes the plugin when build 1 is installed.
  function initializeBuild1(IDAO _dao, uint256 _number) external initializer {
    __PluginUUPSUpgradeable_init(_dao);
    number = _number;
  }
}
```

:::note
Keep in mind that in order to discriminate between the different initialize functions of your different builds, we name the initialize function `initializeBuild1`. This becomes more demanding for subsequent builds of your plugin.
:::

### Initializing Subsequent Builds

Since you have chosen to build an upgradeable plugin, you can publish subsequent builds of plugin and **allow the users to update from an earlier build without losing the storage**.

:::caution
Do not inherit from previous versions as this can mess up the inheritance chain. Instead, write self-contained contracts by simply copying the code or modifying the file in your git repo.
:::

In this example, we wrote a `SimpleStorageBuild2` contract and added a new storage variable `address public account;`. Because users can freshly install the new version or update from build 1, we now have to write two initializer functions: `initializeBuild2` and `initializeFromBuild1` in our Plugin implementation contract.

```solidity
/// @title SimpleStorage build 2
contract SimpleStorageBuild2 is PluginUUPSUpgradeable {
  uint256 public number; // added in build 1
  address public account; // added in build 2

  /// @notice Initializes the plugin when build 2 is installed.
  function initializeBuild2(
    IDAO _dao,
    uint256 _number,
    address _account
  ) external reinitializer(2) {
    __PluginUUPSUpgradeable_init(_dao);
    number = _number;
    account = _account;
  }

  /// @notice Initializes the plugin when the update from build 1 to build 2 is applied.
  /// @dev The initialization of `SimpleStorageBuild1` has already happened.
  function initializeFromBuild1(IDAO _dao, address _account) external reinitializer(2) {
    account = _account;
  }
}
```

In general, for each version for which you want to support updates from, you have to provide a separate `initializeFromBuildX` function taking care of initializing the storage and transferring the `helpers` and `permissions` of the previous version into the same state as if it had been freshly installed.

Each `initializeBuildX` must be protected with a modifier that allows it to be only called once.

In contrast to build 1, we now must use [OpenZeppelin's `modifier reinitializer(uint8 build)`](https://docs.openzeppelin.com/contracts/4.x/api/proxy#Initializable-reinitializer-uint8-) for build 2 instead of `modifier initializer` because it allows us to execute 255 subsequent initializations. More specifically, we used `reinitializer(2)` here for our build 2. Note that we could also have used `function initializeBuild1(IDAO _dao, uint256 _number) external reinitializer(1)` for build 1 because `initializer` and `reinitializer(1)` are equivalent statements. For build 3, we must use `reinitializer(3)`, for build 4 `reinitializer(4)` and so on.
