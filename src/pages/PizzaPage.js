import pizza from '../pizza';
import PizzaButton from '../components/PizzaButton';
import { useEffect, useState } from 'react';

import productService from '../services/products';

const PizzaPage = ({ activeSize }) => {
  const [sizeOn, setSizeOn] = useState([]);
  const [crustOn, setCrustOn] = useState([]);
  // const [toppingType, setToppingType] = useState([]);
  const [toppingType, setToppingType] = useState(pizza.toppingType);
  const [sauceOn, setSauceOn] = useState([]);
  const [cheeseOn, setCheeseOn] = useState([]);
  const [meatOn, setMeatOn] = useState([]);
  const [veggieOn, setVeggieOn] = useState([]);

  useEffect(() => {
    productService.getAllProducts().then((initialProducts) => {
      setSizeOn(initialProducts.sizes);
      setCrustOn(initialProducts.crusts);
      setToppingType(initialProducts.toppingTypes);
      setSauceOn(initialProducts.toppings.sauces);
      setCheeseOn(initialProducts.toppings.cheeses);
      setMeatOn(initialProducts.toppings.meats);
      setVeggieOn(initialProducts.toppings.veggies);
    });
  }, []);

  useEffect(() => {
    const activeSize = sizeOn.find((size) => size.active);
    // console.log('Active size:', activeSize);
  }, [sizeOn]);

  useEffect(() => {
    const findActiveSizeName = sizeOn.find((size) => size.name === activeSize);

    if (activeSize === '') {
      console.log('yes');
    } else {
      console.log(activeSize);
    }

    setSizeOn((prevSizeOn) => {
      return prevSizeOn.map((itemObj) => {
        return itemObj._id === findActiveSizeName._id
          ? { ...itemObj, active: true }
          : { ...itemObj, active: false };
      });
    });

    // console.log('find activeSize', findActiveSizeName);
  }, [activeSize]);
  // }, [activeSize, sizeOn]);

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
        {/* <div>
          {sizes.map((size) => (
            <button
              key={size.name}
              className={size.active ? 'button active' : 'button blue'}
              onClick={() => toggleSize(size)}
              disabled={!size.active && testSizeOn.length >= 4}
            >
              {size.name}
            </button>
          ))}
        </div> */}
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
