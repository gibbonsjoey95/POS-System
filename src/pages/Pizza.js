import pizza from '../pizza';
import { toppingData } from '../store';
import { useAtom } from 'jotai';
import Toppings from '../components/Toppings';
import PizzaButton from '../components/PizzaButton';

const Pizza = () => {
  const [topping, setTopping] = useAtom(toppingData);

  const handleSauceClick = () => {
    setTopping((prevTopping) => ({
      sauces: !prevTopping.sauces,
      cheeses: false,
      meats: false,
      veggies: false,
    }));
  };

  const handleCheesesClick = () => {
    setTopping((prevTopping) => ({
      sauces: false,
      cheeses: !prevTopping.cheeses,
      meats: false,
      veggies: false,
    }));
  };

  const handleMeatClick = () => {
    setTopping((prevTopping) => ({
      sauces: false,
      cheeses: false,
      meats: !prevTopping.meats,
      veggies: false,
    }));
  };

  const handleVeggiesClick = () => {
    setTopping((prevTopping) => ({
      sauces: false,
      cheeses: false,
      meats: false,
      veggies: !prevTopping.veggies,
    }));
  };

  const pizzaSize = pizza.sizes.map((size) => (
    <PizzaButton key={size.id} active={size.active} pizzaOption={size.name} />
  ));

  const pizzaCrust = pizza.crusts.map((crust) => (
    <PizzaButton
      key={crust.id}
      active={crust.active}
      pizzaOption={crust.name}
    />
  ));

  const pizzaSauceTopping = Object.values(pizza.toppings.sauces).map(
    (topping) => (
      <Toppings
        key={topping.id}
        active={topping.active}
        toppingName={topping.name}
      />
    )
  );

  const pizzaCheeseTopping = Object.values(pizza.toppings.cheeses).map(
    (topping) => (
      <Toppings
        key={topping.id}
        active={topping.active}
        toppingName={topping.name}
      />
    )
  );

  const pizzaMeatTopping = Object.values(pizza.toppings.meats).map(
    (topping) => (
      <Toppings
        key={topping.id}
        active={topping.active}
        toppingName={topping.name}
      />
    )
  );

  const pizzaVeggieTopping = Object.values(pizza.toppings.veggies).map(
    (topping) => (
      <Toppings
        key={topping.id}
        active={topping.active}
        toppingName={topping.name}
      />
    )
  );

  return (
    <div className='pizzas-page'>
      <div className='page-title'>
        <h1>Pizzas</h1>
        <div className='pizzas--title-btn'>
          <button className='button blue'>New Pizza</button>
          <button className='button blue'>Minus One</button>
          <button className='button blue'>
            Qty <input type='number' />
          </button>
          <button className='button blue'>Plus One</button>
          <button className='button red'>Delete Pizza</button>
        </div>
      </div>
      <div>
        <h2 className='section-title'>Size</h2>
        <div className='section'>{pizzaSize}</div>
      </div>
      <div>
        <h2 className='section-title'>Crust</h2>
        <div className='section'>{pizzaCrust}</div>
      </div>
      <div>
        <h2 className='section-title'>Toppings</h2>
        <div className='section'>
          <div>
            <button className='button blue'>Light</button>
            <button className='button blue'>Extra</button>
            <button
              className='button blue'
              style={{
                backgroundColor: topping.sauces ? '#FF7F11' : '',
              }}
              onClick={handleSauceClick}
            >
              Sauces
            </button>
            <button
              className='button blue'
              style={{
                backgroundColor: topping.cheeses ? '#FF7F11' : '',
              }}
              onClick={handleCheesesClick}
            >
              Cheeses
            </button>
            <button
              className='button blue'
              style={{
                backgroundColor: topping.meats ? '#FF7F11' : '',
              }}
              onClick={handleMeatClick}
            >
              Meats
            </button>
            <button
              className='button blue'
              style={{
                backgroundColor: topping.veggies ? '#FF7F11' : '',
              }}
              onClick={handleVeggiesClick}
            >
              Veggies
            </button>
          </div>
          <div className='toppings'>
            {topping.sauces && pizzaSauceTopping}
            {topping.cheeses && pizzaCheeseTopping}
            {topping.meats && pizzaMeatTopping}
            {topping.veggies && pizzaVeggieTopping}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
