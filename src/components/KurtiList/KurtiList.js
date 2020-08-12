import React from 'react'
import { useEffect, useState } from 'react';
import KurtiCard from '../../components/KurtiCard/KurtiCard'

function KurtiList() {
  const [kurtis, setKurtis] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/women/kurtis', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setKurtis(res)
      })
  }, [])
  return (
    <div>
      <KurtiCard kurtis={kurtis} />
    </div>
  )
}

export default KurtiList

