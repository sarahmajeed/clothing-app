import React from 'react';
import { Link } from 'react-router-dom'

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
              <Link className="link" to={`/men/kurta/${kurta.kurtaid}`}>
                <div className="card">
                  <div className="container">
                    <img className="img" src={kurta.kurtaimg} alt="error" />
                  </div>
                  <div className="tag">{kurta.tag}</div>
                  <div className="span"></div>
                  <div className="price">Price: Rs. {kurta.kurtaprice}</div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default KurtaCard
