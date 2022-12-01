import { atom } from 'jotai';

export const userInfo = atom({
  name: '',
  address: '',
  orderType: '',
});

export const links = atom([
  {
    id: 1,
    name: 'Customer',
    linkTo: '/',
    active: true,
  },
  {
    id: 2,
    name: 'Pizzas',
    linkTo: 'pizzas-page',
    active: false,
  },
  {
    id: 3,
    name: 'Everything else',
    linkTo: 'everything-else-page',
    active: false,
  },
  {
    id: 4,
    name: 'Payments',
    linkTo: 'payments-page',
    active: false,
  },
  {
    id: 5,
    name: 'Finish',
    linkTo: 'finish-page',
    active: false,
  },
]);

export const items = atom([
  {
    id: 1,
    size: 'Large',
    crust: 'Thin',
    price: 7.99,
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
    active: false,
  },
  {
    id: 2,
    size: 'Medium',
    crust: 'Original',
    price: 5.99,
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
    active: false,
  },
]);
