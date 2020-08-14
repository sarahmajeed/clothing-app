import React, { useState, useEffect } from 'react'
import TrouserCard from '../../Cards/TrouserCard/TrouserCard'

function TrouserList({ search, trousers }) {
  return (
    <div>
      <TrouserCard trousers={trousers} search={search} />
    </div>
  )
}

export default TrouserList
