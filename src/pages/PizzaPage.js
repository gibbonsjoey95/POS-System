import pizza from '../pizza';
import PizzaButton from '../components/PizzaButton';
import { useState } from 'react';

const PizzaPage = () => {
  const [sizeOn, setSizeOn] = useState(pizza.sizes);
  const [crustOn, setCrustOn] = useState(pizza.crusts);
  const [toppingType, setToppingType] = useState(pizza.toppingType);
  const [sauceOn, setSauceOn] = useState(pizza.toppings.sauces);
  const [cheeseOn, setCheeseOn] = useState(pizza.toppings.cheeses);
  const [meatOn, setMeatOn] = useState(pizza.toppings.meats);
  const [veggieOn, setVeggieOn] = useState(pizza.toppings.veggies);

  const toggleOption = (setFunction, id) => {
    setFunction((prev) => {
      return prev.map((itemObj) => {
        return itemObj.id === id
          ? { ...itemObj, active: !itemObj.active }
          : { ...itemObj, active: false };
      });
    });
  };

  const toggleToppingOption = (setFunction, id) => {
    setFunction((prev) => {
      return prev.map((itemObj) => {
        return itemObj.id === id
          ? { ...itemObj, active: !itemObj.active }
          : itemObj;
      });
    });
  };

  const pizzaSize = sizeOn.map((size) => (
    <PizzaButton
      key={size.id}
      active={size.active}
      buttonName={size.name}
      setFunction={setSizeOn}
      id={size.id}
      toggle={toggleOption}
    />
  ));

  const pizzaCrust = crustOn.map((crust) => (
    <PizzaButton
      key={crust.id}
      active={crust.active}
      buttonName={crust.name}
      setFunction={setCrustOn}
      id={crust.id}
      toggle={toggleOption}
    />
  ));

  const pizzaToppingType = Object.values(toppingType).map((type) => (
    <PizzaButton
      key={type.id}
      active={type.active}
      buttonName={type.name}
      setFunction={setToppingType}
      id={type.id}
      toggle={toggleOption}
    />
  ));

  const pizzaSauceTopping = sauceOn.map((topping) => (
    <PizzaButton
      key={topping.id}
      active={topping.active}
      buttonName={topping.name}
      setFunction={setSauceOn}
      id={topping.id}
      toggle={toggleToppingOption}
    />
  ));

  const pizzaCheeseTopping = cheeseOn.map((topping) => (
    <PizzaButton
      key={topping.id}
      active={topping.active}
      buttonName={topping.name}
      setFunction={setCheeseOn}
      id={topping.id}
      toggle={toggleToppingOption}
    />
  ));

  const pizzaMeatTopping = meatOn.map((topping) => (
    <PizzaButton
      key={topping.id}
      active={topping.active}
      buttonName={topping.name}
      setFunction={setMeatOn}
      id={topping.id}
      toggle={toggleToppingOption}
    />
  ));

  const pizzaVeggieTopping = veggieOn.map((topping) => (
    <PizzaButton
      key={topping.id}
      active={topping.active}
      buttonName={topping.name}
      setFunction={setVeggieOn}
      id={topping.id}
      toggle={toggleToppingOption}
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

export default PizzaPage;
