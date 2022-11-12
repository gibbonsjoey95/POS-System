import { Link } from 'react-router-dom';

const OrderTaskList = ({ linkTo, name }) => {
  return (
    <div className='style'>
      <Link className='order-task-link' to={linkTo}>
        <div className='order-task-container button blue'>{name}</div>
      </Link>
    </div>
  );
};

export default OrderTaskList;
