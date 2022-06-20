import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ModalContext } from '../../App';
import { logout, useAuthDispatch } from '../../context/auth';
import './Header.scss';

const Header = ({loginValue, setLogin }) => {

  const navigate = useNavigate()

  const modal = useContext(ModalContext);
  const dispatch = useAuthDispatch()

  const handleLogout = () =>{
    logout(dispatch)
    navigate("/")
    setLogin()
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
        { loginValue ? <p onClick={handleLogout}>logOut</p> : <p onClick={modal}>login</p>}
        </div>
    </header >
  )
}

export default Header