import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../dbVariables';
import linkedin from '../../icons/linkedin.svg'
import react from '../../icons/react.svg'
import './Profile.scss'

const imageUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const Profile = () => {

  //62a5d0b51dba4ebcd75922e6
  const [profile, setProfile] = useState({});
  // const [loading, setLoading] = useState(false);


  useEffect(() => {
    // setLoading(true)
    fetch(`${apiUrl}/profiles/62a5d0b51dba4ebcd75922e6`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        console.log(data)
      })
    // .finally(() => {
    //   setLoading(false);
    // })


  }, []);

  const { name, headline, description, habilities } = profile
  return (
    <div className='body'>
      <div className='profile'>
        <img className='profile__img' src={imageUrl} alt="profile foto" />
        <div>
          <h2>I'm {name}</h2>
          <p className='profile__description'>I'm a {headline} based in california. </p>
          <img className='linkedin' src={linkedin} alt="linkedin" />
          <button>Twiter</button>
          <button>instagram</button>
        </div>
      </div>

      <div className='aboutMe'>
        <h1 className='aboutMe__title'>about me</h1>
        <h2>Full Stack web developer </h2>
        <p>{description}</p>
        <button className='aboutMe__btn'>contact me</button>
      </div>

      <div className='skills'>
        <h2>skills</h2>
        <div className='skills__container'>
          {habilities && habilities.map((skill) => {
            return <div className='skills__item' key={skill}>
              <img className='skills__logo' src={react} alt="" />
              <p>{skill}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile