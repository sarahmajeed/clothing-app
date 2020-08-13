import React, { useState, useEffect } from 'react'
import KurtaList from '../KurtaList/KurtaList'
import SearchBox from '../SearchBox/SearchBox'

function MenKurta() {
  const [kurtas, setKurtas] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/men/kurta', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setKurtas(res)
      })
  }, [])
  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <KurtaList search={search} kurtas={kurtas} setKurtas={setKurtas} />
    </div>
  )
}

export default MenKurta
