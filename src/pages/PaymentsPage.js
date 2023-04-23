import { useState } from 'react';

const PaymentsPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className='order-page'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className='button blue'
            type='radio'
            id='cash'
            name='paymentMethod'
            value='cash'
            checked={paymentMethod === 'cash'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor='cash'>Cash</label>
        </div>
        <div>
          <input
            type='radio'
            id='creditCard'
            name='paymentMethod'
            value='creditCard'
            checked={paymentMethod === 'creditCard'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor='creditCard'>Credit Card</label>
        </div>
        {paymentMethod === 'creditCard' && (
          <>
            <div>
              <label htmlFor='cardNumber'>Card Number</label>
              <input
                type='text'
                id='cardNumber'
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
            <div>
              <label htmlFor='expiryDate'>Expiry Date</label>
              <input
                type='text'
                id='expiryDate'
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </div>
            <div>
              <label htmlFor='cvv'>CVV</label>
              <input
                type='text'
                id='cvv'
                value={cvv}
                onChange={handleCvvChange}
              />
            </div>
          </>
        )}
        <button type='submit'>Pay</button>
      </form>
    </div>
  );
};

export default PaymentsPage;
