import React, { useEffect, useState } from 'react'
import KurtaCard from '../../Cards/KurtaCard/KurtaCard';
import SearchBox from '../../SearchBox/SearchBox';

function KurtaList({ search, kurtas, setKurtas }) {

  return (
    <div>
      <KurtaCard kurtas={kurtas} search={search} />
    </div>
  )
}

export default KurtaList
