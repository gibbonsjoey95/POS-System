import { useAtom } from 'jotai';
import { items } from '../store';

const PageTitle = ({ pageName }) => {
  const [item, setItem] = useAtom(items);

  const addNewPizza = () => {
    const pizzaObject = {
      id: item.length + 1,
      size: '',
      crust: '',
      topping: [
        {
          id: 1,
        },
      ],
    };
    setItem(item.concat(pizzaObject));
  };

  return (
    <div className='title-bar'>
      <h1>{pageName}</h1>
      <div className='title--title-btn'>
        <button className='button blue' onClick={addNewPizza}>
          New Pizza
        </button>
        <button className='button blue'>Minus One</button>
        <button className='button blue'>
          Qty <input type='number' />
        </button>
        <button className='button blue'>Plus One</button>
        <button className='button red'>Delete Pizza</button>
      </div>
    </div>
  );
};

export default PageTitle;
