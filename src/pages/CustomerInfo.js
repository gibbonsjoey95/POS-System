import Button from '../components/Button';

const CustomerInfo = () => {
  return (
    <div className='order-page'>
      <div className='page-title'>
        <h1>Customer Info</h1>
      </div>
      <div className='customer-page'>
        <form className='customer-info-form'>
          <span className='form-input'>
            Phone: <input />
          </span>
          <span className='form-input'>
            Name: <input />
          </span>
          <span className='form-input'>
            Address: <input />
          </span>
          <span className='form-input'>
            City: <input />
          </span>
          <span className='form-input'>
            Street: <input />
          </span>
          <span className='form-input'>
            Zip: <input />
          </span>
        </form>
        <div className='order-method'>
          <Button value={'Pick Up'} />
          <Button value={'Delivery'} />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
