import {Address} from '@graphprotocol/graph-ts';

const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
const ADDRESS_ONE = '0x0000000000000000000000000000000000000001';
const ADDRESS_TWO = '0x0000000000000000000000000000000000000002';
const ADDRESS_THREE = '0x0000000000000000000000000000000000000003';
const ADDRESS_FOUR = '0x0000000000000000000000000000000000000004';
const ADDRESS_FIVE = '0x0000000000000000000000000000000000000005';

const DAO_TOKEN_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const DAO_ADDRESS = '0x00000000000000000000000000000000000000DA';
const VOTING_ADDRESS = '0x00000000000000000000000000000000000000Ad';
const PROPOSAL_ID = '0';
const PROPOSAL_ENTITY_ID =
  Address.fromString(VOTING_ADDRESS).toHexString() + '_0x' + PROPOSAL_ID;

const STRING_DATA = 'Some String Data ...';

const ONE_ETH = '1000000000000000000';
const HALF_ETH = '500000000000000000';

const START_DATE = '1644851000';
const END_DATE = '1644852000';
const SNAPSHOT_BLOCK = '100';
const SUPPORT_THRESHOLD = '500000000000000000';
const MIN_PARTICIPATION = '500000000000000000';
const VOTING_POWER = '3';
const CREATED_AT = '1644850000';

export {
  ADDRESS_ZERO,
  ADDRESS_ONE,
  ADDRESS_TWO,
  ADDRESS_THREE,
  ADDRESS_FOUR,
  ADDRESS_FIVE,
  DAO_TOKEN_ADDRESS,
  DAO_ADDRESS,
  VOTING_ADDRESS,
  STRING_DATA,
  ONE_ETH,
  HALF_ETH,
  PROPOSAL_ID,
  PROPOSAL_ENTITY_ID,
  START_DATE,
  END_DATE,
  SNAPSHOT_BLOCK,
  SUPPORT_THRESHOLD,
  MIN_PARTICIPATION,
  VOTING_POWER,
  CREATED_AT
};
