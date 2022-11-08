const OrderItem = () => {
  return (
    <div className='order-item'>
      <p>(1) Large Original Crust</p>
      <ul>
        <li>Pepperoni</li>
        <li>Onions</li>
      </ul>
      <p className='order-item--cost'>$7.99</p>
    </div>
  );
};

export default OrderItem;
