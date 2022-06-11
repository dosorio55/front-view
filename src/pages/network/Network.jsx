import React, { useEffect, useState } from 'react'

const Network = () => {

  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:4000/profiles')
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
      {loading && <p>is loading</p>}
      {profiles.map((profile) => {
        const { _id, name, image } = profile;
        return <div key={_id}>
          <p>{name}</p>
          <img src={image} alt="" />
        </div>

      })}
    </div>
  )
}

export default Network