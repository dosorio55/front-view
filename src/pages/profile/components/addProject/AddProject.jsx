import React from 'react'
import { useState } from 'react';
import './AddProject.scss'

const INITIAL_STATE = {

    projectName: '',
    projectLink: '',
    description: ''

};


const AddProject = ({modalSetter, modalState }) => {

    const [formProject, setformProject] = useState(INITIAL_STATE);

    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setformProject({ ...formProject, [name]: value });
        console.log(formProject)
    };


    const submitForm = (event) => {
        event.preventDefault(event)
        /*         fetch(`${BASE_URL}/profiles/create`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formsState)
                }).then(() => {
                    console.log(`the user ${formsState}`)
                }) */
        // navitageForm('/profile')

        console.log(formProject)
        modalSetter(false)

    }

    return (
        <div>
            <div className='addProjectContainer'>

                <div>
                    <h2>Add new project</h2>
                    <form onSubmit={submitForm}>

                        <label>
                            <p>Project Name</p>
                            <input type="text" name='projectName' value={formProject.projectName} onChange={handleInput} />
                        </label>
                        <label>
                            <p>image link</p>
                            <input type="text" name='projectLink' value={formProject.projectLink} onChange={handleInput} />
                        </label>
                        <label>
                            <p>brief Description</p>
                            <textarea name="description" id="" cols="0" rows="10" value={formProject.description} onChange={handleInput} ></textarea>
                        </label>
                        <button type='submit' >Save project</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProject