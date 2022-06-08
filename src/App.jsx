import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './core/header/Header';
import Profile from './pages/profile/Profile';
import Form from './pages/form/Form';
import Home from './pages/home/Home';
import LoginModal from './shared/loginModal/LoginModal';
import React, { useState } from 'react';

export const ModalContext = React.createContext()
// export const ModalValueContext = React.createContext()

function App() {

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal)
    console.log(modal)
  }

  return (
    <Router>
      <ModalContext.Provider value={handleModal}>
        {/* <ModalValueContext value={modal}> */}
          <Header></Header>
          <LoginModal modalValue={modal}></LoginModal>
        {/* </ModalValueContext> */}
      </ModalContext.Provider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' />
      </Routes>
    </Router>
  );
}

export default App;
