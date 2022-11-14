const OrderItem = ({ size, crust, toppings, price }) => {
  return (
    <div className='order-item'>
      <p>
        (1) {size} {crust} Crust
      </p>
      <ul>{toppings}</ul>
      <p className='order-item--cost'>${price}</p>
    </div>
  );
};

export default OrderItem;
