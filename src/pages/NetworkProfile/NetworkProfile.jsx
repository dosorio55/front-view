import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL } from '../../context/api/context';
import './NetworkProfile.scss'


const NetworkProfile = () => {

    // const { _id } = useParams()

    // console.log(_id)

    // const [profile, setProfile] = useState({});
    // const [loading, setLoading] = useState(false);


    // useEffect(() => {
    //     setLoading(true)
    //     fetch(`${BASE_URL}/profiles`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setProfile(data);
    //             console.log(data)
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         })


    // }, []);

    return (
        <div>NetworkProfile</div>
    )
}

export default NetworkProfile