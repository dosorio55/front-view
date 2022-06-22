import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'

const ProfileSocials = () => {
    return (

    <div className='header__socials'>
    
        <a href="#none"><BsLinkedin/></a>
        <a href="#none"><BsGithub/></a>
        <a href="#none"><AiOutlineTwitter/></a>
        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}

    </div>
  )
}

export default ProfileSocials