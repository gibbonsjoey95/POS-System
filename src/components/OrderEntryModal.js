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

import itemService from '../services/orderItems';
// import axios from 'axios';

const OrderEntryModal = ({ setOpenLogin }) => {
  const [item, setItem] = useState([]);
  // const [item, setItem] = useAtom(orderItems);
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
    itemService.getAllOrderItems().then((items) => setItem(items.items));
  }, []);

  const addNewOrderItem = () => {
    const itemObject = {
      size: item[0].size,
      crust: item[0].crust,
      price: 7,
      active: item[0].active,
      toppings: [
        {
          name: 'Beef',
        },
        {
          name: 'Onion',
          _id: item[0].toppings[1]._id,
        },
      ],
    };

    itemService.createOrderItem(itemObject).then((returnedItem) => {
      setItem(item.concat(returnedItem));
    });

    console.log(
      'itemObject',
      itemObject.toppings.map((top) => top.name)
    );

    console.log('item', item);
  };

  // const removeOrderItem = () => {
  //   const arrItem = [];

  //   item.map((items) => {
  //     if (items.active === true) {
  //       arrItem.push(items._id);
  //     }
  //   });

  //   console.log('arrItem', arrItem);

  //   itemService.deleteOrderItem(arrItem).then((response) => {
  //     setItem((prevItem) => {
  //       prevItem.filter((item) => item._id !== response.item._id);
  //     });
  //   });

  //   console.log('item', item);
  // };

  // const addNewOrderItem = () => {
  //   const itemObject = {
  //     size: item[0].size,
  //     crust: item[0].crust,
  //     price: 7,
  //     active: false,
  //     toppings: [
  //       {
  //         name: item[0].toppings[0].name,
  //         _id: item[0].toppings[0]._id,
  //       },
  //     ],
  //   };

  //   axios
  //     .post('http://localhost:4000/api/items/', itemObject)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //     });
  // };

  const handleItemClick = (id) => {
    setItem((prevItem) => {
      return prevItem.map((item) => {
        return item._id === id
          ? { ...item, active: !item.active }
          : { ...item, active: false };
      });
    });
  };

  useEffect(() => {
    item?.map((item) => item.active);
  }, [item]);

  useEffect(() => {
    linkTo.map((link) => link.active && setTitle(link.name));
  }, [linkTo]);

  // let itemsInOrder = item.map((items) => (
  //   <OrderItem
  //     active={items.active}
  //     onItemClick={handleItemClick}
  //     key={items._id}
  //     id={items._id}
  //     size={items.size}
  //     crust={items.crust}
  //     price={items.price}
  //     // toppings={items.toppings.map((top) => (
  //     //   <li key={top._id}>{top.name}</li>
  //     // ))}
  //   />
  // ));

  const setOrderItems = () => {
    let itemsInOrder = item?.map((items) => (
      <OrderItem
        active={items.active}
        onItemClick={handleItemClick}
        key={items._id}
        id={items._id}
        size={items.size}
        crust={items.crust}
        price={items.price}
        toppings={items.toppings?.map((top) => (
          <li key={top._id}>{top.name}</li>
        ))}
      />
    ));

    return itemsInOrder;
  };

  const removeOrderItem = () => {
    const arrItem = [];

    item.map((items) => {
      if (items.active === true) {
        arrItem.push(items._id);
      }
    });

    console.log('arrItem', arrItem);

    itemService.deleteOrderItem(arrItem).then((response) => {
      setItem((prevItem) => {
        prevItem.filter((items) => items._id !== response.item._id);
        setOrderItems();
      });
    });

    console.log('item', item);
  };

  return (
    <div className='order-container'>
      <div className='order'>
        <OrderCustomerInfo />
        <div className='order-items'>
          <ul>{setOrderItems()}</ul>
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
        <PageTitle
          pageName={title}
          onAddItemClick={addNewOrderItem}
          onDeleteItemClick={removeOrderItem}
        />
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
