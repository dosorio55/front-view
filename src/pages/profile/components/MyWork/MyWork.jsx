import React from 'react'
import { BASE_URL } from '../../../../context/api/context'

const MyWork = ({ project, getProjects }) => {

    const handleDelete = () => {
        fetch(`${BASE_URL}/project/${project._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                getProjects()
            })
    }

    return (
        <div>
            <p>{project.projectName}</p>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

export default MyWork