const CustomerInfo = () => {
  return (
    <div className='order-page'>
      <div className='page-title'>
        <h1>Customer Info</h1>
      </div>
      <div className='customer-page'>
        <form className='customer-info-form'>
          <div className='form-input'>
            <label>Phone:</label>
            <input className='input' />
          </div>
          <div className='form-input'>
            <label> Name: </label>
            <input className='input' />
          </div>
          <div className='form-input'>
            <label>Address:</label>
            <input className='input' />
          </div>
          <div className='form-input'>
            <label>City:</label>
            <input className='input' />
          </div>
          <div className='form-input'>
            <label>State: </label>
            <input className='input' />
          </div>
          <div className='form-input'>
            <label>Zip:</label>
            <input className='input' />
          </div>
        </form>
        <div className='order-method'>
          <button className='button blue'>Pick Up</button>
          <button className='button blue'>Delivery</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
