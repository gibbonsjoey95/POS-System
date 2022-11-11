import pizza from '../pizza';
import Toppings from '../components/Toppings';
import PizzaButton from '../components/PizzaButton';
import { useState } from 'react';

const Pizza = () => {
  const [sizeOn, setSizeOn] = useState(pizza.sizes);
  const [crustOn, setCrustOn] = useState(pizza.crusts);
  const [toppingType, setToppingType] = useState(pizza.toppingType);
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
    console.log(sizeOn);
  };

  const toggleCrust = (id) => {
    setCrustOn((prevCrustOn) => {
      return prevCrustOn.map((crust) => {
        return crust.id === id ? { ...crust, active: !crust.active } : crust;
      });
    });
  };

  const toggleToppingType = (id) => {
    setToppingType((prevToppingType) => {
      return prevToppingType.map((type) => {
        return type.id === id ? { ...type, active: !type.active } : type;
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

  const pizzaToppingType = Object.values(toppingType).map((type) => (
    <PizzaButton
      key={type.id}
      active={type.active}
      pizzaOption={type.name}
      id={type.id}
      toggle={toggleToppingType}
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
            {pizzaToppingType}
          </div>
          <div className='toppings'>
            {toppingType[0].active && pizzaSauceTopping}
            {toppingType[1].active && pizzaCheeseTopping}
            {toppingType[2].active && pizzaMeatTopping}
            {toppingType[3].active && pizzaVeggieTopping}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
