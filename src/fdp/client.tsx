import {FdpStorage} from '@fairdatasociety/fdp-storage';
try{
  const batchId: any = 'GET_BATCH_ID_FROM_YOUR_NODE' // fill it with batch id from your Bee node
  const fdp = new FdpStorage('http://localhost:1633', batchId)
  const wallet = fdp.account.createWallet() // after creating a wallet, the user must top up its balance before registration
  fdp.account.register('myusername', 'mypassword').then(); // after creating a wallet, the user must top up its balance before registration
}catch(e: any){}
  