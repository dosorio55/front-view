import React, { useContext, useState } from 'react'
import { ModalContext } from '../../App';
import { loginUser, useAuthDispatch, useGetState } from '../../context/auth';
import './LoginModal.scss'
import { useNavigate } from "react-router-dom";


const LoginModal = ({ modalValue }) => {

  const handleModal = useContext(ModalContext);
  const navigate = useNavigate()

  const formInitialState = {
    email: "",
    password: ""
  }

  const dispatch = useAuthDispatch();
  const userState = useGetState();
  const [loginForm, setLoginForm] = useState(formInitialState);

  const handleLoginForm = (event) => {
    const { name, value } = event.target; 
    setLoginForm({...loginForm, [name]: value })
    // console.log(loginForm)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    handleModal()

    try {
      const response = await loginUser(dispatch, loginForm)
      // if (!response.id) return;
      navigate("/network")
    } catch (error) {
      console.log(error);
    }
    console.log(loginForm)
  }


  return (
    <div>
      <div className={modalValue ? 'modalContainer modalContainer--active' : 'modalContainer'}>

        <div>
          <h2 className="modalContainer__item">login</h2>
        </div>
        <div className="modalContainer__line"></div>

        <label htmlFor="email">
          <p>email</p>
          <input
            className="modalContainer__item"
            name='email'
            type="text"
            id='email'
            value={loginForm.email}
            onChange={handleLoginForm}

          />
        </label>
        <label htmlFor="password">
          <p>password</p>
          <input
            className="modalContainer__item"
            name='password'
            type="password"
            id='password'
            value={loginForm.password}
            onChange={handleLoginForm}

          />
        </label>
        <button className="modalContainer__item modalContainer__btn" onClick={handleLogin}>login</button>
        {/* <button className="modalContainer__item modalContainer__btn" onClick={handleModal}>handle</button> */}
        <p>i already have an account</p>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default LoginModal