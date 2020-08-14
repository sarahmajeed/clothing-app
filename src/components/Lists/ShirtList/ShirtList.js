import React from 'react';
import ShirtCard from '../ShirtCard/ShirtCard'

function ShirtList({ search, shirts, setShirts }) {
  return (
    <div>
      <ShirtCard shirts={shirts} search={search} />
    </div>
  )
}

export default ShirtList
