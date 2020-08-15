import React from 'react';
import { Link } from 'react-router-dom'

function TrouserCard({ trousers, search }) {
  const filteredTrousers = trousers.filter(trouser => {
    return trouser.tag.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="kurticard">
      {
        filteredTrousers.map(trouser => {
          return (
            <Link className="link" to={`/women/trousers/${trouser.trouserid}`}>
              <div className="card">
                <div className="container">
                  <img className="img" src={trouser.trouserimg} alt="error" />
                </div>
                <div className="tag">{trouser.tag}</div>
                <div className="span"></div>
                <div className="price">Price: Rs. {trouser.trouserprice}</div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default TrouserCard
