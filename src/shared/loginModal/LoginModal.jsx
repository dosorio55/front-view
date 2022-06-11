import React, { useContext } from 'react'
import { ModalContext } from '../../App';
import './LoginModal.scss'

const LoginModal = ({ modalValue }) => {

/*     const submitForm = (event) => {
        event.preventDefault(event)
        fetch('http://localhost:4000/user', {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
        },
          body: JSON.stringify(formsState)
        }).then(() => {
          console.log(`the user ${formsState}`)
        })
        navitageForm('/profile')
    
        console.log(formsState)
    
      } */

    const handleModal = useContext(ModalContext);

    return (
        <div>
            <div className={modalValue ? 'modalContainer modalContainer--active' : 'modalContainer'}>

                <div>
                    <h2 className="modalContainer__item">login</h2>
                </div>
                <div className="modalContainer__line"></div>
                
                <input className="modalContainer__item" type="text" />
                <input className="modalContainer__item" type="text" />
                <button className="modalContainer__item modalContainer__btn">login</button>
                <button className="modalContainer__item modalContainer__btn" onClick={handleModal}>handle</button>
                <p>i already have an account</p>
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default LoginModal