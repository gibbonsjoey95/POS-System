import { userInfo } from '../store';
import { useAtom } from 'jotai';
import { useState } from 'react';

const CustomerInfoPage = () => {
  const [data, setData] = useAtom(userInfo);
  const [pickupActive, setPickupActive] = useState(false);
  const [deliveryActive, setDeliveryActive] = useState(false);

  const handleNameInput = (event) => {
    setData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  };

  const handleAddressInput = (event) => {
    setData((prevData) => ({
      ...prevData,
      address: event.target.value,
    }));
  };

  const handlePickupClick = () => {
    pickupActive
      ? setData((prevData) => ({
          ...prevData,
          orderType: '',
        }))
      : setData((prevData) => ({
          ...prevData,
          orderType: 'Pick Up',
        }));

    if (deliveryActive) {
      setDeliveryActive(false);
    }

    setPickupActive((current) => !current);
  };

  const handleDeliveryClick = () => {
    deliveryActive
      ? setData((prevData) => ({
          ...prevData,
          orderType: '',
        }))
      : setData((prevData) => ({
          ...prevData,
          orderType: 'Delivery',
        }));

    if (pickupActive) {
      setPickupActive(false);
    }

    setDeliveryActive((current) => !current);
  };

  return (
    <div className='order-page'>
      <div className='page-title'>
        <h1>Customer Info</h1>
      </div>
      <div className='customer-page'>
        <form className='customer-info-form'>
          <label className='form-input'>Phone:</label>
          <input className='input' />

          <label className='form-input'> Name: </label>
          <input
            className='input'
            value={data.name}
            onChange={handleNameInput}
            type='text'
          />

          <label className='form-input'>Address:</label>
          <input
            className='input'
            value={data.address}
            onChange={handleAddressInput}
            type='text'
          />

          <label className='form-input'>City:</label>
          <input className='input' />

          <label className='form-input'>State: </label>
          <input className='input' />

          <label className='form-input'>Zip:</label>
          <input className='input' />
        </form>
        <div className='order-method'>
          <button
            className='button blue'
            style={{
              backgroundColor: pickupActive ? '#FF7F11' : '',
            }}
            onClick={handlePickupClick}
          >
            Pick Up
          </button>
          <button
            className='button blue'
            style={{
              backgroundColor: deliveryActive ? '#FF7F11' : '',
            }}
            onClick={handleDeliveryClick}
          >
            Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoPage;
