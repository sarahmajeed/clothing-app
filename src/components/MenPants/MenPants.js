import React, { useState, useEffect } from 'react';
import PantList from '../PantList/PantList';
import SearchBox from '../SearchBox/SearchBox'

function MenPants() {
  const [pants, setPants] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/men/pants', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setPants(res)
      })
  }, [])
  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <PantList search={search} pants={pants} setPants={setPants} />
    </div>
  )
}

export default MenPants
