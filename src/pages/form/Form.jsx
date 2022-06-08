import React, { useReducer, useState } from 'react'

const INITIAL_STATE = {
  name: '',
  description: '',
  career: '',
  company: '',
  study: ''
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
      case 'Page1': return 2;
      case 'decrement': return { count: state.count - 1 };
      case 'reset': return initialState
      default: return state;
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);



  return (

    <div>
      <form onSubmit={submitForm}>
        {state === 1 ? <div>
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
            <input type="text" name='description' value={formsState.description} onChange={handleInput} />
          </label>
          <div>
            <button type="submit">Guardar Perfil</button>
          </div>
        </div>
          : <div>
            <label>
              <p>company</p>
              <input type="text" name='company' value={formsState.company} onChange={handleInput} />
            </label>
            <label>
              <p>study</p>
              <input type="text" name='study' value={formsState.study} onChange={handleInput} />
            </label>

            <div>
              <button type="submit">Guardar Perfil</button>
            </div>
          </div>

        }
      </form>
      <button onClick={() => dispatch({ type: 'Page1' })}>next</button>
    </div>
  )
}

export default Form