import CustomerInfo from '../pages/CustomerInfo';
import Pizza from '../pages/Pizza';
import EverythingElse from '../pages/EverythingElse';
import Payments from '../pages/Payments';
import Finish from '../pages/Finish';
import { Routes, Route, Link } from 'react-router-dom';

const OrderEntryModal = ({ setOpenLogin }) => {
  return (
    <div className='order-container'>
      <div className='order'>
        <div className='order-info'>
          <h3>Customer Name</h3>
          <h3>Order Type</h3>
          <h3>Customer Address</h3>
        </div>
        <div className='order-items'>
          <div className='order-item'>
            <p>(1) Large Original Crust</p>
            <ul>
              <li>Pepperoni</li>
              <li>Onions</li>
            </ul>
            <p className='order-item--cost'>$7.99</p>
          </div>
        </div>
        <div className=''>
          <div className='order-to-be-paid'>
            <span>Paid</span>
            <span>$0.00</span>
          </div>
          <div className='order-total'>
            <span>(0 Items)Total</span>
            <span>$0.00</span>
          </div>
        </div>
        <div className='order-nav'>
          <button className='button blue'>Down</button>
          <button className='button blue'>Up</button>
          <button className='button blue'>Tax and Total</button>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<CustomerInfo />} />
        <Route path='/pizzas' element={<Pizza />} />
        <Route path='/everything-else' element={<EverythingElse />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/finish' element={<Finish />} />
      </Routes>
      <div className='order-task-list'>
        <div
          className='order-task-container button red'
          onClick={() => setOpenLogin(false)}
        >
          Exit Order
        </div>

        <div className='style'>
          <Link className='order-task-link' to='/'>
            <div className='order-task-container button blue'>Customer</div>
          </Link>
        </div>

        <div className='style'>
          <Link className='order-task-link' to='pizzas'>
            <div className='order-task-container button blue'>Pizzas</div>
          </Link>
        </div>

        <div className='style'>
          <Link className='order-task-link' to='everything-else'>
            <div className='order-task-container button blue'>
              Everything else
            </div>
          </Link>
        </div>

        <div className='style'>
          <Link className='order-task-link' to='payments'>
            <div className='order-task-container button blue'>Payments</div>
          </Link>
        </div>

        <div className='style'>
          <Link className='order-task-link' to='finish'>
            <div className='order-task-container button blue'>Finish</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderEntryModal;
