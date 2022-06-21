import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/api/context';
import linkedin from '../../icons/linkedin.svg'
import AddProject from './components/addProject/AddProject';
import './Profile.scss'


const Profile = () => {

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [projectModal, setProjectModal] = useState(false);


  useEffect(() => {
    
    setLoading(true)
    const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token

    fetch(`${BASE_URL}/profiles/personal`, {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${jwtToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setProfile(data[0]);
        console.log(data[0])
      })
      .finally(() => {
        setLoading(false);
      })


  }, []);

  const handleEdit = () => {
    setEditMode(!editMode)
  }

  const addProjectModal = () => {
    setProjectModal(!projectModal)
  }

  const { name, headline, description, habilities, image } = profile
  return (

    <div className='body'>

     { projectModal && <AddProject modalSetter={setProjectModal} modalState={projectModal}></AddProject>}
      {editMode ? <button onClick={handleEdit}>Stop edit mode</button> : <button onClick={handleEdit}>edit</button>  }
      <p>{loading}</p>
      <div className='profile'>
        <img className='profile__img' src={image} alt="profile foto" />
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
              <img className='skills__logo' src="/images/ReactLogo.png" alt="" />
              <p>{skill}</p>
            </div>
          })}
        </div>
      </div>

      <div className='container'>
        <h2>My work</h2>
        {editMode && <div className='projectContainer'>
          <p onClick={addProjectModal}>add a new project</p>
  

        </div>}
      </div>

    </div>
  )
}

export default Profile