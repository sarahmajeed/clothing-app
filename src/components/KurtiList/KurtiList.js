import React from 'react'
import KurtiCard from '../../components/KurtiCard/KurtiCard'

function KurtiList({ kurtis, setKurtis, search }) {

  return (
    <div>
      <KurtiCard kurtis={kurtis} search={search} />
    </div>
  )
}

export default KurtiList

