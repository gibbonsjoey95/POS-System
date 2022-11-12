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
import { useState } from 'react';

const OrderEntryModal = ({ setOpenLogin }) => {
  const [size, setSize] = useState(pizza.sizes);

  let pizzaSize = size.map((size) => console.log(size.name));

  console.log(pizzaSize);

  return (
    <div className='order-container'>
      <div className='order'>
        <OrderCustomerInfo />
        <div className='order-items'>
          <OrderItem size={size[1].name} />
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
