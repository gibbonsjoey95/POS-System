import { atom } from 'jotai';

export const userInfo = atom({
  name: '',
  address: '',
  orderType: '',
});

export const crustSize = atom({
  size: '',
});

export const toppingData = atom({
  sauces: false,
  cheeses: false,
  meats: false,
  veggies: false,
});
