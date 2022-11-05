import { useState } from 'react';
import OrderEntryModal from './OrderEntryModal';

const LoginModal = ({ setOpenLogin }) => {
  const [login, setLogin] = useState('');
  const [openOrderEntry, setOpenOrderEntry] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenOrderEntry(true);
  };

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };

  return (
    <div className='modal-background'>
      <form onSubmit={handleSubmit} className='modal-container'>
        <input
          value={login}
          type='number'
          onChange={handleLogin}
          className='login-input'
          autoFocus
        />
        <div className='row-1'>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(1))}
          >
            1
          </button>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(2))}
          >
            2
          </button>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(3))}
          >
            3
          </button>
        </div>
        <div className='row-2'>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(4))}
          >
            4
          </button>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(5))}
          >
            5
          </button>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(6))}
          >
            6
          </button>
        </div>
        <div className='row-3'>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(7))}
          >
            7
          </button>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(8))}
          >
            8
          </button>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(9))}
          >
            9
          </button>
        </div>
        <div className='row-4'>
          <button className='button blue' onClick={() => setLogin('')}>
            Clear
          </button>
          <button
            className='button blue'
            onClick={() => setLogin(login.concat(0))}
          >
            0
          </button>
          <button className='button blue' onClick={handleSubmit}>
            Log In
          </button>
        </div>
      </form>
      {openOrderEntry && <OrderEntryModal setOpenLogin={setOpenLogin} />}
    </div>
  );
};

export default LoginModal;
