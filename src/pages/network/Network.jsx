import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/context';
import './Network.scss'


const Network = () => {

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/profiles`)
      .then(response => response.json())
      .then(data => {
        setProfiles(data);
        console.log(data)
      })
      .finally(() => {
        setLoading(false);
      })

  }, []);

  return (
    <div>
      <div className="networkContainer">
        <div className="filter">all filters go here</div>
        <div>
          {loading && <p>is loading</p>}
          {profiles.map((profile) => {
            const { _id, name, image, headline } = profile;
            return <div className="listContainer" key={_id}>
              <img className='listContainer__img' src={image} alt="" />
              <div>
                <p className='listContainer__name'>{name}</p>
                <p>{headline}</p>
              </div>
              <button className='listContainer_btn'>message</button>
            </div>
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default Network