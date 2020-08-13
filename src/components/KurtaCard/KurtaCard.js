import React from 'react'

function KurtaCard({ kurtas, search }) {
  const filteredKurtas = kurtas.filter(kurta => {
    return kurta.tag.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div>
      <div className="kurticard">
        {
          filteredKurtas.map(kurta => {
            return (
              <div className="card">
                <img className="img" src={kurta.kurtaimg} alt="error" />
                <div className="tag">{kurta.tag}</div>
                <div className="price">Price: Rs. {kurta.kurtaprice}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default KurtaCard
