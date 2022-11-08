import { useState } from 'react';
import toppings from '../toppings';

const Pizza = () => {
  const [meatsActive, setMeatsActive] = useState(false);

  const handleMeatClick = () => {
    setMeatsActive((current) => !current);
  };

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
        <div className='section'>
          <button className='button blue'>X-tra Large</button>
          <button className='button blue'>Large</button>
          <button className='button blue'>Medium</button>
          <button className='button blue'>Small</button>
        </div>
      </div>
      <div>
        <h2 className='section-title'>Crust</h2>
        <div className='section'>
          <button className='button blue'>Original</button>
          <button className='button blue'>Thin</button>
          <button className='button blue'>Pan</button>
        </div>
      </div>
      <div>
        <h2 className='section-title'>Toppings</h2>
        <div className='section'>
          <div>
            <button className='button blue'>Light</button>
            <button className='button blue'>Extra</button>
            <button className='button blue'>Sauces</button>
            <button className='button blue'>Cheeses</button>
            <button
              className='button blue'
              style={{
                backgroundColor: meatsActive ? '#FF7F11' : '',
              }}
              onClick={handleMeatClick}
            >
              Meats
            </button>
            <button className='button blue'>Veggies</button>
          </div>
          {meatsActive &&
            Object.keys(toppings.sauces).map((sauce) => (
              <button className='button blue'>{sauce.name}</button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pizza;
