import React from 'react';
import { Link } from 'react-router-dom'
function ShirtCard({ shirts, search }) {
  const filteredShirts = shirts.filter(shirt => {
    return shirt.tag.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div>
      <div className="kurticard">
        {
          filteredShirts.map(shirt => {
            return (
              <Link className="link" to={`/men/shirts/${shirt.shirtid}`}>
                <div className="card">
                  <div className="container">
                    <img className="img" src={shirt.shirtimg} alt="error" />
                  </div>
                  <div className="tag">{shirt.tag}</div>
                  <div className="span"></div>
                  <div className="price">Price: Rs. {shirt.shirtprice}</div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default ShirtCard
