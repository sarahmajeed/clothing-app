import React from 'react';
import AccCard from '../../Cards/AccCard/AccCard'

function AccList({ search, acc }) {
  return (
    <div>
      <AccCard acc={acc} search={search} />
    </div>
  )
}

export default AccList
