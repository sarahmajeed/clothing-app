import React from 'react'
import KurtiCard from '../../Cards/KurtiCard/KurtiCard'

function KurtiList({ kurtis, search }) {

  return (
    <div>
      <KurtiCard kurtis={kurtis} search={search} />
    </div>
  )
}

export default KurtiList

