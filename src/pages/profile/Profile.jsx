import React from 'react'
import './Profile.scss'

const imageUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const Profile = () => {
  return (
    <body className='body'>
      <div className='profile'>
        <img className='profile__img' src={imageUrl} alt="profile foto" />
        <div>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p className='profile__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat autem repellendus commodi? Eaque accusamus vero commodi sint rem nam reprehenderit culpa quibusdam unde placeat, adipisci dolores facere repellendus exercitationem?</p>
        <button>contact me</button>
        </div>
      </div>
      <div>
        <h2>about me</h2>
      </div>
    </body>
  )
}

export default Profile