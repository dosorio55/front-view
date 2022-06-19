import React from 'react'
import { Link } from 'react-router-dom'

import './NetworkItem.scss'


const NetworkItem = ({ networkItem }) => {

  const { name, image, headline, _id } = networkItem

  return (
    <div>
      <div className="listContainer">
        <img className='listContainer__img' src={image} alt="" />
        <div>
          <p className='listContainer__name'>{name}</p>
          <p>{headline}</p>
        </div>
        <Link  to={`${_id}`}>network</Link>
        <button className='listContainer_btn'>message</button>
      </div>

    </div>
  )
}

export default NetworkItem