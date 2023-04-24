import { useState } from 'react';

import CreditCardInput from '../components/PaymentsComponents/CreditCardInput';

const PaymentsPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentMethod(e.target.value);

    console.log(paymentMethod);
  };

  return (
    <div className='order-page'>
      <form>
        <div>
          <button
            type='button'
            onClick={() => setPaymentMethod('Cash')}
            className={
              paymentMethod === 'Cash' ? 'button active' : 'button blue'
            }
          >
            Cash
          </button>
          <button
            type='button'
            onClick={() => setPaymentMethod('Credit')}
            className={
              paymentMethod === 'Credit' ? 'button active' : 'button blue'
            }
          >
            Credit
          </button>
        </div>
        {paymentMethod === 'Credit' && <CreditCardInput />}
        <button
          type='submit'
          className='button blue'
          onClick={handlePaymentSubmit}
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentsPage;
