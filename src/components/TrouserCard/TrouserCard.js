import React from 'react'

function TrouserCard({ trousers, search }) {
  const filteredTrousers = trousers.filter(trouser => {
    return trouser.tag.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="kurticard">
      {
        filteredTrousers.map(trouser => {
          return (
            <div className="card">
              <img className="img" src={trouser.trouserimg} alt="error" />
              <div className="tag">{trouser.tag}</div>
              <div className="span"></div>
              <div className="price">Price: Rs. {trouser.trouserprice}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TrouserCard
