import size from '../test';

const FinishPage = () => {
  return (
    <div className='order-page'>
      <div className='page-title'>
        <h1>Finish</h1>
        <button className='button blue' onClick={() => size()}>
          Test here
        </button>
      </div>
    </div>
  );
};

export default FinishPage;
