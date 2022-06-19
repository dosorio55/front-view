import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../context/api/context';
import NetworkItem from './components/NetworkItem';
import './Network.scss'


const Network = () => {


  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/profiles`)
      .then(response => response.json())
      .then(data => {
        setProfiles(data);
       // console.log(data)
      })
      .finally(() => {
        setLoading(false);
      })

  }, []);

  const filteredNetwork = profiles.filter((filteredData) =>{
   return filteredData.name.toLowerCase().includes(search)
  })

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
   }

  
  return (
    <div>
      {filteredNetwork.map((data)=>
      <NetworkItem key={data._id} networkItem={data}></NetworkItem>

      )}
      <div className="networkContainer">
        <input type="text" onChange={handleSearch}/>
      {/*  <div className="filter">all filters go here</div>
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
        </div> */}
      </div>
    </div>
  )
}

export default Network