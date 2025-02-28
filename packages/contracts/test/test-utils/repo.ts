import {ethers} from 'hardhat';

import {
  PluginRepoRegistry,
  PluginRepoFactory,
  PluginRepo,
  PluginUUPSUpgradeableSetupV1Mock,
  PluginRepo__factory,
  PluginUUPSUpgradeableSetupV1Mock__factory,
  PluginRepoRegistry__factory,
} from '../../typechain';
import {deployWithProxy} from './proxy';
import {getMergedABI} from '../../utils/abi';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers';

export async function deployMockPluginSetup(
  signer: SignerWithAddress
): Promise<PluginUUPSUpgradeableSetupV1Mock> {
  const PluginSetupMock = new PluginUUPSUpgradeableSetupV1Mock__factory(signer);
  const pluginSetupMockContract = await PluginSetupMock.deploy();

  return pluginSetupMockContract;
}

export async function deployNewPluginRepo(
  maintainer: SignerWithAddress
): Promise<PluginRepo> {
  const PluginRepo = new PluginRepo__factory(maintainer);
  const newPluginRepo = await deployWithProxy<PluginRepo>(PluginRepo);
  await newPluginRepo.initialize(maintainer.address);

  return newPluginRepo;
}

export async function deployPluginRepoFactory(
  signers: any,
  pluginRepoRegistry: PluginRepoRegistry
): Promise<PluginRepoFactory> {
  const {abi, bytecode} = await getMergedABI(
    // @ts-ignore
    hre,
    'PluginRepoFactory',
    ['PluginRepoRegistry']
  );

  // PluginRepoFactory
  const PluginRepoFactory = new ethers.ContractFactory(
    abi,
    bytecode,
    signers[0]
  );

  const pluginRepoFactory = (await PluginRepoFactory.deploy(
    pluginRepoRegistry.address
  )) as PluginRepoFactory;

  return pluginRepoFactory;
}

export async function deployPluginRepoRegistry(
  managingDao: any,
  ensSubdomainRegistrar: any,
  signer: SignerWithAddress
): Promise<PluginRepoRegistry> {
  const PluginRepoRegistry = new PluginRepoRegistry__factory(signer);

  let pluginRepoRegistry = await deployWithProxy<PluginRepoRegistry>(
    PluginRepoRegistry
  );

  await pluginRepoRegistry.initialize(
    managingDao.address,
    ensSubdomainRegistrar.address
  );

  return pluginRepoRegistry;
}
