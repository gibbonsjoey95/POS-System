import './styles.css';
import LoginModal from './components/LoginModal';

import { useState } from 'react';

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);

  const loginModalOpen = () => {
    setOpenLogin(true);
  };

  return (
    <main>
      <div className='login--page'>
        <div className='login-btn-center'>
          <h1 className='login--welcome'>Welcome to Pizza Pay</h1>
          <button className='button blue' onClick={loginModalOpen}>
            Log In
          </button>
          {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
        </div>
      </div>
    </main>
  );
};

export default App;
