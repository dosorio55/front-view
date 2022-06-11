import React from 'react'
import './Profile.scss'

const imageUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const Profile = () => {
  return (
    <body className='body'>
      <div className='profile'>
        <img className='profile__img' src={imageUrl} alt="profile foto" />
        <div>
          <h2>I'm Leanne Joye</h2>
          <p className='profile__description'>I'm a full stack web developer based in california. </p>
        <button>facebook</button>
        <button>Twiter</button>
        <button>instagram</button>
        </div>
      </div>
      <div>
        <h1>about me</h1>
        <h2>Full Stack web developer </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo vel possimus itaque sunt dolor nihil nemo doloremque error, enim, dolorem voluptate vero velit ab laudantium animi in atque dignissimos iste necessitatibus magnam! Totam ullam facere deserunt quidem laborum assumenda inventore!</p>
        <button>contact me</button>
      </div>
    </body>
  )
}

export default Profile