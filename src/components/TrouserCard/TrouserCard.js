import React from 'react'

function TrouserCard({ trousers }) {
  return (
    <div className="kurticard">
      {
        trousers.map(trouser => {
          return (
            <div className="card">
              <img className="img" src={trouser.trouserimg} alt="error" />
              <div className="tag">{trouser.tag}</div>
              <div className="price">Price: Rs. {trouser.trouserprice}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TrouserCard
