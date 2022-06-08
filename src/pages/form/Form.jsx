import React, { useState } from 'react'

const INITIAL_STATE = {
  email: '',
  password: ''
};

const Form = () => {

  const [formsState, setFormsState] = useState(INITIAL_STATE)

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setFormsState({ ...formsState, [name]: value });
  };

  const submitForm = (event) => {
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

    console.log(formsState)

  }

  return (
    <form onSubmit={submitForm}>
      <label>
        <p>email</p>
        <input type="text" name='email' value={formsState.email} onChange={handleInput} />
      </label>
      <label>
        <p>password</p>
        <input type="text" name='password' value={formsState.password} onChange={handleInput} />
      </label>
      <div>
        <button type="submit">Guardar Perfil</button>
      </div>

    </form>
  )
}

export default Form