import CustomerInfoPage from '../pages/CustomerInfoPage';
import PizzaPage from '../pages/PizzaPage';
import PaymentsPage from '../pages/PaymentsPage';
import FinishPage from '../pages/FinishPage';
import PageTitle from './PageTitle';
import OrderCustomerInfo from './OrderCustomerInfo';
import OrderItem from './OrderItem';
import OrderTaskList from './OrderTaskList';
import OrderInfo from './OrderInfo';
import { useAtom } from 'jotai';
import { links } from '../store';
import { useEffect, useState } from 'react';

import itemService from '../services/orderItems';

const OrderEntryModal = ({ setOpenLogin }) => {
  const [item, setItem] = useState([]);
  const [linkTo, setLinkTo] = useAtom(links);
  const [title, setTitle] = useState('');

  const [page, setPage] = useState('');

  const togglePageLink = (id) => {
    for (let i = 0; i < linkTo.length; i++) {
      if (linkTo[i].id === id) {
        setPage(linkTo[i].name);
      }
    }

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

  const handleItemClick = (id) => {
    setPage('Pizzas');

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

  const addNewOrderItem = () => {
    const itemObject = {
      size: 'Large',
      crust: item[0].crust,
      price: 7.99,
      active: item[0].active,
      toppings: [
        {
          name: 'Sausage',
        },
      ],
    };

    itemService
      .createOrderItem(itemObject)
      .then((returnedItem) => {
        setItem(item.concat(returnedItem.item));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeOrderItem = () => {
    const arrItem = [];

    item.map((items) => {
      if (items.active === true) {
        arrItem.push(items._id);
      }
    });

    itemService
      .deleteOrderItem(arrItem[0])
      .then((response) => {
        const updatedItems = item.filter(
          (item) => item._id !== response.item._id
        );
        setItem(updatedItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleActiveItemClick = (direction) => {
    const activeIndex = item.findIndex((item) => item.active);
    let nextIndex = 0;

    if (activeIndex !== -1) {
      nextIndex =
        (direction === 'down' ? activeIndex + 1 : activeIndex - 1) %
        item.length;
      if (nextIndex < 0) {
        nextIndex += item.length;
      }
    }

    const updatedItems = item.map((item, i) => {
      return { ...item, active: i === nextIndex };
    });

    setItem(updatedItems);
  };

  const moveActiveDown = () => {
    handleActiveItemClick('down');
  };

  const moveActiveUp = () => {
    handleActiveItemClick('up');
  };

  // const handleChangeSize = () => {
  //   console.log('Yes');
  // };

  return (
    <div className='order-container'>
      <div className='order'>
        <OrderCustomerInfo />
        <div className='order-items'>
          <ul>{setOrderItems()}</ul>
        </div>
        <OrderInfo
          items={item}
          // getOrderTotal={getOrderTotal()}
          onDownClick={moveActiveDown}
          onUpClick={moveActiveUp}
        />
      </div>
      <div className='page'>
        <PageTitle
          pageName={title}
          onAddItemClick={addNewOrderItem}
          onDeleteItemClick={removeOrderItem}
        />
        {page === 'Customer' && <CustomerInfoPage />}
        {page === 'Pizzas' && <PizzaPage />}
        {page === 'Payments' && <PaymentsPage />}
        {page === 'Finish' && <FinishPage />}
        {/* <Routes>
          <Route path='/' element={<CustomerInfoPage />} />
          <Route path='/pizzas-page' element={<PizzaPage />} />
          <Route path='/payments-page' element={<PaymentsPage />} />
          <Route path='/finish-page' element={<FinishPage />} />
        </Routes> */}
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
