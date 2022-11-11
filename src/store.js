import { atom } from 'jotai';

export const userInfo = atom({
  name: '',
  address: '',
  orderType: '',
});

// export const toppingType = {
//   sauces: {
//     name: 'Sauces',
//     active: true,
//     id: 1,
//   },
//   cheeses: {
//     name: 'Cheeses',
//     active: false,
//     id: 2,
//   },
//   meats: {
//     name: 'Meats',
//     active: false,
//     id: 3,
//   },
//   veggies: {
//     name: 'Veggies',
//     active: false,
//     id: 4,
//   },
// };
