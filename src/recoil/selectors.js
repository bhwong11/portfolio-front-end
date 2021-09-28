import { selector } from 'recoil';
import { userState } from './atoms';

export const logginState = selector({
  key: 'logginState',
  get: ({ get }) => { 
    const user = get(userState);
    return user ? true : false;
  }
});