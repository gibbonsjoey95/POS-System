const OrderItem = ({ size, crust, toppings }) => {
  return (
    <div className='order-item'>
      <p>
        (1) {size} {crust} Crust
      </p>
      <ul>{toppings}</ul>
      <p className='order-item--cost'>$7.99</p>
    </div>
  );
};

export default OrderItem;
