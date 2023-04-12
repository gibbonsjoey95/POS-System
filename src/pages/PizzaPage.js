import PizzaButton from '../components/PizzaButton';
import { useEffect, useState } from 'react';

const PizzaPage = ({
  activeSize,
  setActiveSize,
  activeCrust,
  setActiveCrust,
  activeToppings,
  setActiveToppings,
  products,
  item,
}) => {
  const [sizeOn, setSizeOn] = useState(products.sizes);
  const [crustOn, setCrustOn] = useState(products.crusts);
  const [toppingType, setToppingType] = useState(products.toppingTypes);
  const [sauceOn, setSauceOn] = useState(products.toppings.sauces);
  const [cheeseOn, setCheeseOn] = useState(products.toppings.cheeses);
  const [meatOn, setMeatOn] = useState(products.toppings.meats);
  const [veggieOn, setVeggieOn] = useState(products.toppings.veggies);

  // will use this to update order item
  // useEffect(() => {
  //   const activeSize = sizeOn.find((size) => size.active);
  //   // console.log('Active size:', activeSize);
  // }, [sizeOn]);

  // console.log('activeSize outside', activeSize);
  // console.log('item', item);

  // refactor later
  useEffect(() => {
    const noActiveItems = item.every((item) => item.active === false);

    if (noActiveItems) {
      const updatedSizes = sizeOn.map((size) => {
        return { ...size, active: false };
      });

      const updatedCrust = crustOn.map((crust) => {
        return { ...crust, active: false };
      });

      setCheeseOn((prevCheeseOn) => {
        return prevCheeseOn.map((cheese) => {
          return { ...cheese, active: false };
        });
      });

      setSauceOn((prevSauceOn) => {
        return prevSauceOn.map((sauce) => {
          return { ...sauce, active: false };
        });
      });

      setMeatOn((prevMeatOn) => {
        return prevMeatOn.map((meat) => {
          return { ...meat, active: false };
        });
      });

      setVeggieOn((prevVeggieOn) => {
        return prevVeggieOn.map((veggie) => {
          return { ...veggie, active: false };
        });
      });

      setSizeOn(updatedSizes);
      setCrustOn(updatedCrust);

      // look into why this is necessary
      setActiveSize('No active size');
      setActiveCrust('No active crust');
      setActiveToppings('No active toppings');
    }
  }, [item]);

  // Refactor later
  useEffect(() => {
    const findActiveSizeName = sizeOn.find((size) => size.name === activeSize);

    if (findActiveSizeName) {
      setSizeOn((prevSizeOn) => {
        return prevSizeOn.map((size) => {
          return size._id === findActiveSizeName._id
            ? { ...size, active: true }
            : { ...size, active: false };
        });
      });
    } else {
      setSizeOn((prevSizeOn) => {
        return prevSizeOn.map((size) => {
          return { ...size, active: false };
        });
      });
    }
  }, [activeSize]);

  // Refactor later
  useEffect(() => {
    const findActiveCrustName = crustOn.find(
      (crust) => crust.name === activeCrust
    );

    if (findActiveCrustName) {
      setCrustOn((prevCrustOn) => {
        return prevCrustOn.map((crust) => {
          return crust._id === findActiveCrustName._id
            ? { ...crust, active: true }
            : { ...crust, active: false };
        });
      });
    } else {
      setCrustOn((prevCrustOn) => {
        return prevCrustOn.map((crust) => {
          return { ...crust, active: false };
        });
      });
    }
  }, [activeCrust]);

  // refactor later
  useEffect(() => {
    let findActiveCheeseName = [];
    let findActiveSauceName = [];
    let findActiveMeatName = [];
    let findActiveVeggieName = [];

    for (let i = 0; i < activeToppings.length; i++) {
      let cheeseName = cheeseOn.find(
        (cheese) => cheese.name === activeToppings[i].name
      );

      let sauceName = sauceOn.find(
        (sauce) => sauce.name === activeToppings[i].name
      );

      let meatName = meatOn.find(
        (meat) => meat.name === activeToppings[i].name
      );

      let veggieName = veggieOn.find(
        (veggie) => veggie.name === activeToppings[i].name
      );

      findActiveCheeseName.push(cheeseName);
      findActiveSauceName.push(sauceName);
      findActiveMeatName.push(meatName);
      findActiveVeggieName.push(veggieName);
    }

    setCheeseOn((prevCheeseOn) => {
      return prevCheeseOn.map((cheese) => {
        return { ...cheese, active: false };
      });
    });

    setSauceOn((prevSauceOn) => {
      return prevSauceOn.map((sauce) => {
        return { ...sauce, active: false };
      });
    });

    setMeatOn((prevMeatOn) => {
      return prevMeatOn.map((meat) => {
        return { ...meat, active: false };
      });
    });

    setVeggieOn((prevVeggieOn) => {
      return prevVeggieOn.map((veggie) => {
        return { ...veggie, active: false };
      });
    });

    const allActiveCheeses = findActiveCheeseName.filter(
      (cheese) => cheese !== undefined
    );

    const allActiveSauces = findActiveSauceName.filter(
      (sauce) => sauce !== undefined
    );

    const allActiveMeats = findActiveMeatName.filter(
      (meat) => meat !== undefined
    );
    const allActiveVeggies = findActiveVeggieName.filter(
      (veggie) => veggie !== undefined
    );

    allActiveCheeses.forEach((activeCheese) => {
      if (activeCheese) {
        setCheeseOn((prevCheeseOn) => {
          return prevCheeseOn.map((cheese) => {
            return cheese._id === activeCheese._id
              ? { ...cheese, active: true }
              : cheese;
          });
        });
      } else {
        setCheeseOn((prevCheeseOn) => {
          return prevCheeseOn((cheese) => {
            return { ...cheese, active: false };
          });
        });
      }
    });

    allActiveSauces.forEach((activeSauce) => {
      if (activeSauce) {
        setSauceOn((prevSauceOn) => {
          return prevSauceOn.map((sauce) => {
            return sauce._id === activeSauce._id
              ? { ...sauce, active: true }
              : sauce;
          });
        });
      } else {
        setSauceOn((prevSauceOn) => {
          return prevSauceOn((sauce) => {
            return { ...sauce, active: false };
          });
        });
      }
    });

    allActiveMeats.forEach((activeMeat) => {
      if (activeMeat) {
        setMeatOn((prevMeatOn) => {
          return prevMeatOn.map((meat) => {
            return meat._id === activeMeat._id
              ? { ...meat, active: true }
              : meat;
          });
        });
      } else {
        setMeatOn((prevMeatOn) => {
          return prevMeatOn((meat) => {
            return { ...meat, active: false };
          });
        });
      }
    });

    allActiveVeggies.forEach((activeVeggie) => {
      if (activeVeggie) {
        setVeggieOn((prevVeggieOn) => {
          return prevVeggieOn.map((veggie) => {
            return veggie._id === activeVeggie._id
              ? { ...veggie, active: true }
              : veggie;
          });
        });
      } else {
        setVeggieOn((prevVeggieOn) => {
          return prevVeggieOn((veggie) => {
            return { ...veggie, active: false };
          });
        });
      }
    });
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
