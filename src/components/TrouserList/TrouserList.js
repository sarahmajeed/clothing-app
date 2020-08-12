import React, { useState, useEffect } from 'react'
import TrouserCard from '../TrouserCard/TrouserCard'

function TrouserList() {
  const [trousers, setTrousers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/women/trousers', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setTrousers(res)
      })
  }, [])
  return (
    <div>
      <TrouserCard trousers={trousers} />
    </div>
  )
}

export default TrouserList
