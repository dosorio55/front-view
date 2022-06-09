import React, { useReducer, useState } from 'react'
import './Form.scss'


const INITIAL_STATE = {
  name: '',
  description: '',
  career: '',
  softSkills: '',
  studies: ''
};

const Form = () => {

  const [formsState, setFormsState] = useState(INITIAL_STATE)

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setFormsState({ ...formsState, [name]: value });
    console.log(formsState)
  };

  const submitForm = (event) => {
    event.preventDefault(event)
    // fetch('http://localhost:4000/user', {
    //   method: 'POST',
    //   headers:{
    //     'Content-Type':'application/json'
    // },
    //   body: JSON.stringify(formsState)
    // }).then(() => {
    //   console.log(`the user ${formsState}`)
    // })

    console.log(formsState)

  }

  const initialState = 1;

  const reducer = (state, action) => {
    switch (action.type) {
      case 'next': return state + 1;
      case 'previous': return state - 1;
      case state === 3: return
      default: return state;
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);
  const [skills, setSkills] = useState(['javaScript', 'CSS']);


  const addSkill = () => {
    const newList = [...skills]
    newList.push('Angular')
    setSkills(newList)
  }

  return (

    <div className='formContainer'>
      {/* <img className='formContainer__img' src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80" alt="" /> */}
      <div>
        <form onSubmit={submitForm}>
          {state === 1 &&
            <div>
              <h2>yourself</h2>
              <label>
                <p>name</p>
                <input type="text" name='name' value={formsState.name} onChange={handleInput} />
              </label>
              <label>
                <p>career</p>
                <input type="text" name='career' value={formsState.career} onChange={handleInput} />
              </label>
              <label>
                <p>describe yourself</p>
                <textarea name="description" id="" cols="0" rows="10" value={formsState.description} onChange={handleInput} ></textarea>
              </label>
            </div>}
          {state === 2 &&
            <div>
              <h2>about me</h2>
              <label>
                <p>soft skills</p>
                <input type="text" name='softSkills' value={formsState.softSkills} onChange={handleInput} />
              </label>
              <label>
                <p>studies</p>
                <input type="text" name='studies' value={formsState.studies} onChange={handleInput} />
              </label>
              <div>
                <button onClick={addSkill}>add</button>
                {skills.map((skill, key) => {
                    return <p key={key}>{skill}</p>
                  })}
              </div>
            </div>}
        </form >
        <div>
          {state === 2 && <button type="submit">Guardar Perfil</button>}
        </div>
        <button onClick={() => dispatch({ type: 'previous' })}>previous</button>
        <button onClick={() => dispatch({ type: 'next' })}>next</button>
      </div>
    </div >
  )
}

export default Form