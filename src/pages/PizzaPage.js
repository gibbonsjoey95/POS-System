import PizzaButton from '../components/PizzaButton';
import { useEffect, useState } from 'react';

const PizzaPage = ({
  activeSize,
  setActiveSize,
  // setSize, this sets the initial pizza size
  activeCrust,
  setActiveCrust,
  activeToppings,
  setActiveToppings,
  products,
  item,
  setItem,
}) => {
  const [sizeOn, setSizeOn] = useState(products.sizes);
  const [crustOn, setCrustOn] = useState(products.crusts);
  const [toppingType, setToppingType] = useState(products.toppingTypes);
  const [sauceOn, setSauceOn] = useState(products.toppings.sauces);
  const [cheeseOn, setCheeseOn] = useState(products.toppings.cheeses);
  const [meatOn, setMeatOn] = useState(products.toppings.meats);
  const [veggieOn, setVeggieOn] = useState(products.toppings.veggies);

  // changes size on active item
  useEffect(() => {
    const findActiveItem = item.find((item) => item.active);
    const findActiveSizeName = sizeOn.find((size) => size.active);
    if (findActiveItem && findActiveSizeName) {
      const updatedItem = { ...findActiveItem, size: findActiveSizeName.name };
      const updatedItems = item.map((oldItem) => {
        if (oldItem._id === updatedItem._id) {
          return updatedItem;
        } else {
          return oldItem;
        }
      });
      setItem(updatedItems);
    }
  }, [sizeOn]);

  useEffect(() => {
    const findActiveItem = item.find((item) => item.active);
    const findActiveCrustName = crustOn.find((crust) => crust.active);
    if (findActiveItem && findActiveCrustName) {
      const updatedItem = {
        ...findActiveItem,
        crust: findActiveCrustName.name,
      };
      const updatedItems = item.map((oldItem) => {
        if (oldItem._id === updatedItem._id) {
          return updatedItem;
        } else {
          return oldItem;
        }
      });
      setItem(updatedItems);
    }
  }, [crustOn]);

  const resetActiveButtons = (array) => {
    return array.map((item) => ({ ...item, active: false }));
  };

  useEffect(() => {
    const noActiveItems = item.every((item) => item.active === false);

    if (noActiveItems) {
      setSizeOn(resetActiveButtons(sizeOn));
      setCrustOn(resetActiveButtons(crustOn));
      setCheeseOn(resetActiveButtons(cheeseOn));
      setSauceOn(resetActiveButtons(sauceOn));
      setMeatOn(resetActiveButtons(meatOn));
      setVeggieOn(resetActiveButtons(veggieOn));

      // this resets the setActives so that you can click the same button again and it will immediatley work
      setActiveSize([]);
      setActiveCrust([]);
      setActiveToppings([]);
    }
  }, [
    item,
    setSizeOn,
    setCrustOn,
    setCheeseOn,
    setSauceOn,
    setMeatOn,
    setVeggieOn,
  ]);

  // This will find the size of the active item, then turn on the correct size button turning off the incorrect ones
  useEffect(() => {
    const findActiveSizeName = sizeOn.find((size) => size.name === activeSize);

    setSizeOn((prevSizeOn) => {
      return prevSizeOn.map((size) => {
        return size._id === (findActiveSizeName ? findActiveSizeName._id : null)
          ? { ...size, active: true }
          : { ...size, active: false };
      });
    });
  }, [activeSize, setSizeOn]);

  // This will find the crust of the active item, then turn on the correct crust button turning off the incorrect ones
  useEffect(() => {
    setCrustOn((prevCrustOn) =>
      prevCrustOn.map((crust) =>
        crust.name === activeCrust
          ? { ...crust, active: true }
          : { ...crust, active: false }
      )
    );
  }, [activeCrust, setCrustOn]);

  // looks at toppings in item, then turns present toppings active and other not active
  useEffect(() => {
    const findActiveToppings = (toppingsOn, activeToppings) => {
      if (!activeToppings || activeToppings.length === 0) {
        return [];
      }
      return activeToppings.flatMap((activeTopping) => {
        return toppingsOn.find(
          (topping) => topping.name === activeTopping.name
        );
      });
    };

    const activateToppings = (toppingsOn, activeToppings) => {
      return toppingsOn.map((topping) => {
        const isActive = activeToppings.some((activeTopping) => {
          return activeTopping.name === topping.name;
        });
        return { ...topping, active: isActive };
      });
    };

    const activeCheeses = findActiveToppings(cheeseOn, activeToppings);
    const activeSauces = findActiveToppings(sauceOn, activeToppings);
    const activeMeats = findActiveToppings(meatOn, activeToppings);
    const activeVeggies = findActiveToppings(veggieOn, activeToppings);

    const activeCheesesFiltered = activeCheeses.filter(
      (cheese) => cheese !== undefined
    );
    const activeSaucesFiltered = activeSauces.filter(
      (sauce) => sauce !== undefined
    );
    const activeMeatsFiltered = activeMeats.filter(
      (meat) => meat !== undefined
    );
    const activeVeggiesFiltered = activeVeggies.filter(
      (veggie) => veggie !== undefined
    );

    setCheeseOn(activateToppings(cheeseOn, activeCheesesFiltered));
    setSauceOn(activateToppings(sauceOn, activeSaucesFiltered));
    setMeatOn(activateToppings(meatOn, activeMeatsFiltered));
    setVeggieOn(activateToppings(veggieOn, activeVeggiesFiltered));
  }, [activeToppings]);

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
            {toppingType[1].active && pizzaSauceTopping}
            {toppingType[0].active && pizzaCheeseTopping}
            {toppingType[2].active && pizzaMeatTopping}
            {toppingType[3].active && pizzaVeggieTopping}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
