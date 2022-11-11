import { atom } from 'jotai';

export const userInfo = atom({
  name: '',
  address: '',
  orderType: '',
});

export const crustSize = atom({
  size: '',
});
