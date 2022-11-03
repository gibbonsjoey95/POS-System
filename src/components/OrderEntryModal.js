import { useState } from 'react';
import CustomerInfo from './CustomerInfo';
import Pizza from './Pizza';
import EverythingElse from './EverythingElse';
import Payments from './Payments';
import Finish from './Finish';

const OrderEntryModal = ({ setOpenLogin }) => {
  const [customerInfoPage, setCustomerInfoPage] = useState(false);
  const [pizzaPage, setPizzaPage] = useState(true);
  const [everythingElsePage, setEverythingElsePage] = useState(false);
  const [paymentsPage, setPaymentsPage] = useState(false);
  const [finishPage, setFinishPage] = useState(false);

  const openCustomerPage = () => {
    setCustomerInfoPage(true);
    setPizzaPage(false);
    setEverythingElsePage(false);
    setPaymentsPage(false);
    setFinishPage(false);
  };

  const openPizzasPage = () => {
    setCustomerInfoPage(false);
    setPizzaPage(true);
    setEverythingElsePage(false);
    setPaymentsPage(false);
    setFinishPage(false);
  };

  const openEverythingElsePage = () => {
    setCustomerInfoPage(false);
    setPizzaPage(false);
    setEverythingElsePage(true);
    setPaymentsPage(false);
    setFinishPage(false);
  };

  const openPaymentsPage = () => {
    setCustomerInfoPage(false);
    setPizzaPage(false);
    setEverythingElsePage(false);
    setPaymentsPage(true);
    setFinishPage(false);
  };

  const openFinishPage = () => {
    setCustomerInfoPage(false);
    setPizzaPage(false);
    setEverythingElsePage(false);
    setPaymentsPage(false);
    setFinishPage(true);
  };

  return (
    <div className='order-container'>
      {customerInfoPage && <CustomerInfo />}
      {pizzaPage && <Pizza />}
      {everythingElsePage && <EverythingElse />}
      {paymentsPage && <Payments />}
      {finishPage && <Finish />}
      <div className='order-task-list'>
        <div className='order-task red' onClick={() => setOpenLogin(false)}>
          Exit Order
        </div>
        <div className='order-task' onClick={openCustomerPage}>
          Customer
        </div>
        <div className='order-task' onClick={openPizzasPage}>
          Pizzas
        </div>
        <div className='order-task' onClick={openEverythingElsePage}>
          Everything else
        </div>
        <div className='order-task' onClick={openPaymentsPage}>
          Payments
        </div>
        <div className='order-task' onClick={openFinishPage}>
          Finish
        </div>
      </div>
    </div>
  );
};

export default OrderEntryModal;
