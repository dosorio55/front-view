import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { ModalContext } from '../../App';
import { logout, useAuthDispatch, useGetState } from '../../context/auth';
import './Header.scss';

const Header = () => {

  const [login, setLogin] = useState(false);

  const modal = useContext(ModalContext);
  const dispatch = useAuthDispatch()
  const userState = useGetState()
  // console.log(userState.id)

  const handleLogout = () =>{
    logout(dispatch)
  }

  return (
    <header className='headerContainer'>
        <div>
            <Link className='headerContainer__link' to='/'>Home</Link>
            <Link className='headerContainer__link' to='/profile'>my profile</Link>
            <Link className='headerContainer__link' to='/add-profile'>add profile</Link>
            <Link className='headerContainer__link' to='/network'>network</Link>
        </div>
        <div>
        { login ? <p onClick={handleLogout}>logOut</p> : <p onClick={modal}>login</p>}
        </div>
    </header >
  )
}

export default Header