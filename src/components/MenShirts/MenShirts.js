import React, { useEffect, useState } from 'react';
import ShirtList from '../ShirtList/ShirtList';
import SearchBox from '../SearchBox/SearchBox';

function MenShirts() {
  const [shirts, setShirts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/men/shirts', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setShirts(res)
      })
  }, [])
  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />
      <ShirtList search={search} shirts={shirts} setShirts={setShirts} />
    </div>
  )
}

export default MenShirts
