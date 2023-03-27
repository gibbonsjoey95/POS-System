// import { useAtom } from 'jotai';
// import { orderItems } from '../store';

// import axios from 'axios';

const PageTitle = ({ pageName, onAddItemClick, onDeleteItemClick }) => {
  // const [item, setItem] = useAtom(orderItems);

  // const addNewPizza = () => {
  //   const pizzaObject = {
  //     id: item.length + 1,
  //     size: '',
  //     crust: '',
  //     topping: [
  //       {
  //         id: 1,
  //       },
  //     ],
  //   };
  //   setItem(item.concat(pizzaObject));
  // };

  // const addNewPizza = () => {
  //   axios.post('http://localhost:4000/api/items', {
  //     size: 'Small',
  //     crust: 'Pan',
  //     price: 5.99,
  //     active: false,
  //     toppings: [
  //       {
  //         name: 'Beef',
  //       },
  //     ],
  //   });

  //   console.log('yes');
  // };

  return (
    <div className='title-bar'>
      <h1>{pageName}</h1>
      <div className='title--title-btn'>
        <button className='button blue' onClick={() => onAddItemClick()}>
          New Pizza
        </button>
        <button className='button blue'>Minus One</button>
        <button className='button blue'>
          Qty <input type='number' />
        </button>
        <button className='button blue'>Plus One</button>
        <button className='button red' onClick={() => onDeleteItemClick()}>
          Delete Pizza
        </button>
      </div>
    </div>
  );
};

export default PageTitle;
