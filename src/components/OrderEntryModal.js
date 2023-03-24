import CustomerInfoPage from '../pages/CustomerInfoPage';
import PizzaPage from '../pages/PizzaPage';
import PaymentsPage from '../pages/PaymentsPage';
import FinishPage from '../pages/FinishPage';
import PageTitle from './PageTitle';
import { Routes, Route } from 'react-router-dom';
import OrderCustomerInfo from './OrderCustomerInfo';
import OrderItem from './OrderItem';
import OrderTaskList from './OrderTaskList';
import { useAtom } from 'jotai';
import { links } from '../store';
import { useEffect, useState } from 'react';
import axios from 'axios';

const OrderEntryModal = ({ setOpenLogin }) => {
  const [item, setItem] = useState([]);
  // const [item, setItem] = useAtom(items);
  const [linkTo, setLinkTo] = useAtom(links);
  const [title, setTitle] = useState('');

  const togglePageLink = (id) => {
    setLinkTo((prevLinkTo) => {
      return prevLinkTo.map((link) => {
        return link.id === id
          ? { ...link, active: !link.active }
          : { ...link, active: false };
      });
    });
  };

  let pageLink = linkTo.map((link) => (
    <OrderTaskList
      key={link.id}
      linkTo={link.linkTo}
      name={link.name}
      active={link.active}
      id={link.id}
      toggle={togglePageLink}
    />
  ));

  useEffect(() => {
    axios.get('http://localhost:4000/api/items/').then((response) => {
      console.log(response.data.items);
      setItem(response.data.items);
    });
  }, []);

  const handleItemClick = (id) => {
    setItem((prevItem) => {
      return prevItem.map((item) => {
        return item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: false };
      });
    });
  };

  useEffect(() => {
    item.map((item) => item.active);
  }, [item]);

  useEffect(() => {
    linkTo.map((link) => link.active && setTitle(link.name));
  }, [linkTo]);

  let itemsInOrder = item.map((items) => (
    <OrderItem
      active={items.active}
      onItemClick={handleItemClick}
      key={items._id}
      id={items._id}
      size={items.size}
      crust={items.crust}
      price={items.price}
      toppings={items.toppings.map((top) => (
        <li key={top._id}>{top.name}</li>
      ))}
    />
  ));

  return (
    <div className='order-container'>
      <div className='order'>
        <OrderCustomerInfo />
        <div className='order-items'>
          <ul>{itemsInOrder}</ul>
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
      <div className='page'>
        <PageTitle pageName={title} />
        <Routes>
          <Route path='/' element={<CustomerInfoPage />} />
          <Route path='/pizzas-page' element={<PizzaPage />} />
          <Route path='/payments-page' element={<PaymentsPage />} />
          <Route path='/finish-page' element={<FinishPage />} />
        </Routes>
      </div>
      <div className='order-task-list'>
        <div
          className='order-task-container button red'
          onClick={() => setOpenLogin(false)}
        >
          Exit Order
        </div>
        {pageLink}
      </div>
    </div>
  );
};

export default OrderEntryModal;
