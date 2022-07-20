// import {useQuery} from 'react-query';
import {fdp} from './client';
import {FDP_USERNAME, FDP_PASSWORD} from '@env';

export const registerAccount = async () => {
  const account = await fdp.account.register(FDP_USERNAME, FDP_PASSWORD);
  return account;
};
