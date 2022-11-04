import CustomerInfo from '../pages/CustomerInfo';
import Pizza from '../pages/Pizza';
import EverythingElse from '../pages/EverythingElse';
import Payments from '../pages/Payments';
import Finish from '../pages/Finish';
import { Routes, Route, Link } from 'react-router-dom';

const OrderEntryModal = ({ setOpenLogin }) => {
  return (
    <div className='order-container'>
      <div className='order-info'></div>
      <Routes>
        <Route path='/' element={<CustomerInfo />} />
        <Route path='/pizzas' element={<Pizza />} />
        <Route path='/everything-else' element={<EverythingElse />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/finish' element={<Finish />} />
      </Routes>
      <div className='order-task-list'>
        <div
          className='order-task-container red'
          onClick={() => setOpenLogin(false)}
        >
          Exit Order
        </div>

        <div className='style'>
          <Link className='order-task-link' to='/'>
            <div className='order-task-container'>Customer</div>
          </Link>
        </div>

        <div className='style'>
          <Link className='order-task-link' to='pizzas'>
            <div className='order-task-container'>Pizzas</div>
          </Link>
        </div>

        <div className='style'>
          <Link className='order-task-link' to='everything-else'>
            <div className='order-task-container'>Everything else</div>
          </Link>
        </div>

        <div className='style'>
          <Link className='order-task-link' to='payments'>
            <div className='order-task-container'>Payments</div>
          </Link>
        </div>

        <div className='style'>
          <Link className='order-task-link' to='finish'>
            <div className='order-task-container'>Finish</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderEntryModal;
