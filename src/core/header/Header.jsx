import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss';

const Header = () => {
  return (
    <header className='headerContainer'>
        <div>
            <Link className='headerContainer__link' to='/'>Home</Link>
            <Link className='headerContainer__link' to='/profile'>profile</Link>
            <Link className='headerContainer__link' to='/form'>form</Link>
        </div>
        <div>
            logo de hamburguesa
        </div>
    </header >
  )
}

export default Header