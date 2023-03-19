import pizza from '../pizza';
import PizzaButton from '../components/PizzaButton';
import { useEffect, useState } from 'react';

import axios from 'axios';

const PizzaPage = () => {
  const [sizeOn, setSizeOn] = useState([]);
  const [crustOn, setCrustOn] = useState([]);
  // const [toppingType, setToppingType] = useState([]);
  const [toppingType, setToppingType] = useState(pizza.toppingType);
  const [sauceOn, setSauceOn] = useState([]);
  const [cheeseOn, setCheeseOn] = useState([]);
  const [meatOn, setMeatOn] = useState([]);
  const [veggieOn, setVeggieOn] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/').then((response) => {
      let sizes = response.data.sizes;
      let crusts = response.data.crusts;
      // let toppingTypes = response.data.toppingTypes;
      let sauces = response.data.toppings.sauces;
      let cheeses = response.data.toppings.cheeses;
      let meats = response.data.toppings.meats;
      let veggies = response.data.toppings.veggies;

      setSizeOn(sizes);
      setCrustOn(crusts);
      // setToppingType(toppingTypes);
      setSauceOn(sauces);
      setCheeseOn(cheeses);
      setMeatOn(meats);
      setVeggieOn(veggies);
    });
  }, []);

  const toggleOption = (setFunction, id) => {
    setFunction((prev) => {
      return prev.map((itemObj) => {
        return itemObj._id === id
          ? { ...itemObj, active: !itemObj.active }
          : { ...itemObj, active: false };
      });
    });
  };

  const toggleToppingOption = (setFunction, id) => {
    setFunction((prev) => {
      return prev.map((itemObj) => {
        return itemObj._id === id
          ? { ...itemObj, active: !itemObj.active }
          : itemObj;
      });
    });
  };

  const pizzaSize = sizeOn.map((size) => (
    <PizzaButton
      key={size._id}
      active={size.active}
      buttonName={size.name}
      setFunction={setSizeOn}
      id={size._id}
      toggle={toggleOption}
    />
  ));

  const pizzaCrust = crustOn.map((crust) => (
    <PizzaButton
      key={crust._id}
      active={crust.active}
      buttonName={crust.name}
      setFunction={setCrustOn}
      id={crust._id}
      toggle={toggleOption}
    />
  ));

  const pizzaToppingType = Object.values(toppingType).map((type) => (
    <PizzaButton
      key={type._id}
      active={type.active}
      buttonName={type.name}
      setFunction={setToppingType}
      id={type._id}
      toggle={toggleOption}
    />
  ));

  const pizzaSauceTopping = sauceOn.map((topping) => (
    <PizzaButton
      key={topping._id}
      active={topping.active}
      buttonName={topping.name}
      setFunction={setSauceOn}
      id={topping._id}
      toggle={toggleToppingOption}
    />
  ));

  const pizzaCheeseTopping = cheeseOn.map((topping) => (
    <PizzaButton
      key={topping._id}
      active={topping.active}
      buttonName={topping.name}
      setFunction={setCheeseOn}
      id={topping._id}
      toggle={toggleToppingOption}
    />
  ));

  const pizzaMeatTopping = meatOn.map((topping) => (
    <PizzaButton
      key={topping._id}
      active={topping.active}
      buttonName={topping.name}
      setFunction={setMeatOn}
      id={topping._id}
      toggle={toggleToppingOption}
    />
  ));

  const pizzaVeggieTopping = veggieOn.map((topping) => (
    <PizzaButton
      key={topping._id}
      active={topping.active}
      buttonName={topping.name}
      setFunction={setVeggieOn}
      id={topping._id}
      toggle={toggleToppingOption}
    />
  ));

  return (
    <div className='pizzas-page'>
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
