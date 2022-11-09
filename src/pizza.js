const sizes = [
  {
    name: 'X-tra Large',
    id: 1,
    active: false,
  },
  {
    name: 'Large',
    id: 2,
    active: false,
  },
  {
    name: 'Medium',
    id: 3,
    active: true,
  },
  {
    name: 'Small',
    id: 4,
    active: true,
  },
];

const crusts = [
  {
    name: 'Original',
    id: 1,
    active: false,
  },
  {
    name: 'Thin',
    id: 2,
    active: false,
  },
  {
    name: 'Pan',
    id: 3,
    active: true,
  },
];

const toppings = {
  sauces: [
    {
      name: 'Original Sauce',
      id: 1,
      active: false,
    },
    {
      name: 'Garlic Sauce',
      id: 2,
      active: false,
    },
    {
      name: 'Honey BBQ',
      id: 3,
      active: true,
    },
    {
      name: 'Hot Buffalo',
      id: 4,
      active: false,
    },
    {
      name: 'Alfredo',
      id: 5,
      active: false,
    },
  ],
  cheeses: [
    {
      name: 'Cheddar',
      id: 1,
      active: false,
    },
    {
      name: 'Feta',
      id: 2,
      active: false,
    },
    {
      name: 'Shredded Parmesean',
      id: 3,
      active: false,
    },
    {
      name: 'American',
      id: 4,
      active: false,
    },
    {
      name: 'Shredded Provolone',
      id: 5,
      active: true,
    },
    {
      name: 'Sliced Provolone',
      id: 6,
      active: false,
    },
  ],
  meats: [
    {
      name: 'Pepperoni',
      id: 1,
      active: false,
    },
    {
      name: 'Ham',
      id: 2,
      active: false,
    },
    {
      name: 'Chicken',
      id: 3,
      active: false,
    },
    {
      name: 'Sausage',
      id: 4,
      active: false,
    },
    {
      name: 'Beef',
      id: 5,
      active: true,
    },
    {
      name: 'Bacon',
      id: 6,
      active: false,
    },
    {
      name: 'Steak',
      id: 7,
      active: false,
    },
    {
      name: 'Salami',
      id: 8,
      active: false,
    },
  ],
  veggies: [
    {
      name: 'Mushrooms',
      id: 1,
      active: false,
    },
    {
      name: 'Onions',
      id: 2,
      active: false,
    },
    {
      name: 'Green Peppers',
      id: 3,
      active: false,
    },
    {
      name: 'Black Olives',
      id: 4,
      active: false,
    },
    {
      name: 'Pineapple',
      id: 5,
      active: true,
    },
    {
      name: 'Tomatoes',
      id: 6,
      active: true,
    },
    {
      name: 'Red Peppers',
      id: 7,
      active: false,
    },
    {
      name: 'Spinach',
      id: 8,
      active: false,
    },
    {
      name: 'Jalapenos',
      id: 9,
      active: false,
    },
    {
      name: 'Banana Peppers',
      id: 10,
      active: false,
    },
  ],
};

const pizza = { sizes, crusts, toppings };

export default pizza;
