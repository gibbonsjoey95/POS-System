import { userInfo } from '../store';
import { useAtom } from 'jotai';

const OrderCustomerInfo = () => {
  const [data] = useAtom(userInfo);

  return (
    <div className='order-info'>
      <h3>{data.name}</h3>
      <h3>{data.orderType}</h3>
      <h3>{data.address}</h3>
    </div>
  );
};

export default OrderCustomerInfo;
