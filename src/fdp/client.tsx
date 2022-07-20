import {FdpStorage} from '@fairdatasociety/fdp-storage';

export const fdp = new FdpStorage(
  'http://localhost:1633',
  'http://localhost:1635',
);
//export const wallet = fdp.account.createWallet(); // after creating a wallet, the user must top up its balance before registration
