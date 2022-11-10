import pizza from '../pizza';
import { toppingData } from '../store';
import { useAtom } from 'jotai';
import Toppings from '../components/Toppings';
import PizzaButton from '../components/PizzaButton';
import { useState } from 'react';

const Pizza = () => {
  const [topping, setTopping] = useAtom(toppingData);
  const [sizeOn, setSizeOn] = useState(pizza.sizes);
  const [crustOn, setCrustOn] = useState(pizza.crusts);
  const [sauceOn, setSauceOn] = useState(pizza.toppings.sauces);
  const [cheeseOn, setCheeseOn] = useState(pizza.toppings.cheeses);
  const [meatOn, setMeatOn] = useState(pizza.toppings.meats);
  const [veggieOn, setVeggieOn] = useState(pizza.toppings.veggies);

  const toggleSize = (id) => {
    setSizeOn((prevSizeOn) => {
      return prevSizeOn.map((size) => {
        return size.id === id ? { ...size, active: !size.active } : size;
      });
    });
  };

  const toggleCrust = (id) => {
    setCrustOn((prevCrustOn) => {
      return prevCrustOn.map((crust) => {
        return crust.id === id ? { ...crust, active: !crust.active } : crust;
      });
    });
  };

  const toggleSauce = (id) => {
    setSauceOn((prevSauceOn) => {
      return prevSauceOn.map((sauce) => {
        return sauce.id === id ? { ...sauce, active: !sauce.active } : sauce;
      });
    });
  };

  const toggleCheese = (id) => {
    setCheeseOn((prevCheeseOn) => {
      return prevCheeseOn.map((cheese) => {
        return cheese.id === id
          ? { ...cheese, active: !cheese.active }
          : cheese;
      });
    });
  };

  const toggleMeat = (id) => {
    setMeatOn((prevMeatOn) => {
      return prevMeatOn.map((meat) => {
        return meat.id === id ? { ...meat, active: !meat.active } : meat;
      });
    });
  };

  const toggleVeggie = (id) => {
    setVeggieOn((prevVeggieOn) => {
      return prevVeggieOn.map((veggie) => {
        return veggie.id === id
          ? { ...veggie, active: !veggie.active }
          : veggie;
      });
    });
  };

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

  const pizzaSize = sizeOn.map((size) => (
    <PizzaButton
      key={size.id}
      active={size.active}
      pizzaOption={size.name}
      id={size.id}
      toggle={toggleSize}
    />
  ));

  const pizzaCrust = crustOn.map((crust) => (
    <PizzaButton
      key={crust.id}
      active={crust.active}
      pizzaOption={crust.name}
      id={crust.id}
      toggle={toggleCrust}
    />
  ));

  const pizzaSauceTopping = sauceOn.map((topping) => (
    <Toppings
      key={topping.id}
      active={topping.active}
      toppingName={topping.name}
      id={topping.id}
      toggle={toggleSauce}
    />
  ));

  const pizzaCheeseTopping = cheeseOn.map((topping) => (
    <Toppings
      key={topping.id}
      active={topping.active}
      toppingName={topping.name}
      id={topping.id}
      toggle={toggleCheese}
    />
  ));

  const pizzaMeatTopping = meatOn.map((topping) => (
    <Toppings
      key={topping.id}
      active={topping.active}
      toppingName={topping.name}
      id={topping.id}
      toggle={toggleMeat}
    />
  ));

  const pizzaVeggieTopping = veggieOn.map((topping) => (
    <Toppings
      key={topping.id}
      active={topping.active}
      toppingName={topping.name}
      id={topping.id}
      toggle={toggleVeggie}
    />
  ));

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
