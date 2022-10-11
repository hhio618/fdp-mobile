import {FdpStorage} from '@fairdatasociety/fdp-storage';
import {
  Environments,
  getEnvironmentConfig,
} from "@fairdatasociety/fdp-contracts";


const batchId: any = "https://bee-debug-test.bzzwiki.xyz/" // fill it with batch id from your Bee node
export const fdp = new FdpStorage(
  "https://bee-test.bzzwiki.xyz/",
  batchId,
  {
    ensOptions: {
      ...getEnvironmentConfig(Environments.LOCALHOST),
      rpcUrl: "https://chain-test.bzzwiki.xyz/",
      performChecks: true,
    },
  }
);

