import { atom } from 'jotai';

export const userInfo = atom({
  name: '',
  address: '',
  orderType: '',
});

export const items = atom([
  {
    id: 1,
    size: 'Large',
    crust: 'Thin',
    topping: [
      {
        id: 1,
        name: 'Pepperoni',
      },
      {
        id: 2,
        name: 'Onions',
      },
      {
        id: 3,
        name: 'Beef',
      },
    ],
  },
  {
    id: 2,
    size: 'Medium',
    crust: 'Original',
    topping: [
      {
        id: 1,
        name: 'Jalapenos',
      },
      {
        id: 2,
        name: 'Pineapple',
      },
    ],
  },
]);
