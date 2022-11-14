import CustomerInfoPage from '../pages/CustomerInfoPage';
import PizzaPage from '../pages/PizzaPage';
import EverythingElsePage from '../pages/EverythingElsePage';
import PaymentsPage from '../pages/PaymentsPage';
import FinishPage from '../pages/FinishPage';
import { Routes, Route } from 'react-router-dom';
import OrderCustomerInfo from './OrderCustomerInfo';
import OrderItem from './OrderItem';
import OrderTaskList from './OrderTaskList';
import pizza from '../pizza';
import { useAtom } from 'jotai';
import { items } from '../store';

const OrderEntryModal = ({ setOpenLogin }) => {
  const [item, setItem] = useAtom(items);

  return (
    <div className='order-container'>
      <div className='order'>
        <OrderCustomerInfo />
        <div className='order-items'>
          <ul>
            {item.map((items) => (
              <OrderItem
                key={items.id}
                size={items.size}
                crust={items.crust}
                toppings={items.topping.map((top) => (
                  <li key={top.id}>{top.name}</li>
                ))}
              />
            ))}
          </ul>
        </div>
        <div className=''>
          <div className='order-to-be-paid'>
            <p>Paid</p>
            <p>$0.00</p>
          </div>
          <div className='order-total'>
            <p>(0 Items)Total</p>
            <p>$0.00</p>
          </div>
        </div>
        <div className='order-nav'>
          <button className='button blue'>Down</button>
          <button className='button blue'>Up</button>
          <button className='button blue'>Tax and Total</button>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<CustomerInfoPage />} />
        <Route path='/pizzas-page' element={<PizzaPage />} />
        <Route path='/everything-else-page' element={<EverythingElsePage />} />
        <Route path='/payments-page' element={<PaymentsPage />} />
        <Route path='/finish-page' element={<FinishPage />} />
      </Routes>
      <div className='order-task-list'>
        <div
          className='order-task-container button red'
          onClick={() => setOpenLogin(false)}
        >
          Exit Order
        </div>

        <OrderTaskList linkTo='/' name='Customer' />
        <OrderTaskList linkTo='pizzas-page' name='Pizzas' />
        <OrderTaskList linkTo='everything-else-page' name='Everything else' />
        <OrderTaskList linkTo='payments-page' name='Payments' />
        <OrderTaskList linkTo='finish-page' name='Finish' />
      </div>
    </div>
  );
};

export default OrderEntryModal;
