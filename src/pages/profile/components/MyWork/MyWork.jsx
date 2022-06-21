import React from 'react'
import { BASE_URL } from '../../../../context/api/context'

const MyWork = ({ project }) => {

    const handleDelete = () => {
        fetch(`${BASE_URL}/project/personal`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
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