import React from 'react';
import { Link } from 'react-router-dom'

function PantCard({ pants, search }) {
  const filteredPants = pants.filter(pant => {
    return pant.tag.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="kurticard">
      {
        filteredPants.map(pant => {
          return (
            <Link className="link" to={`/men/pants/${pant.pantid}`}>
              <div className="card">
                <div className="container">
                  <img className="img" src={pant.pantimg} alt="error" />
                </div>
                <div className="tag">{pant.tag}</div>
                <div className="span"></div>
                <div className="price">Price: Rs. {pant.pantprice}</div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default PantCard
