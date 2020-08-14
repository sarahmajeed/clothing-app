import React from 'react';
import PantCard from '../../Cards/PantCard/PantCard'

function PantList({ search, pants }) {
  return (
    <div>
      <PantCard pants={pants} search={search} />
    </div>
  )
}

export default PantList
