import React, { useEffect, useState } from 'react';
import AccList from '../Lists/AccList/AccList';
import SearchBox from '../SearchBox/SearchBox'

function Accessories() {
  const [acc, setAcc] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/accessories', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setAcc(res)
      })
  }, [])
  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <AccList search={search} acc={acc} setAcc={setAcc} />
    </div>
  )
}

export default Accessories
