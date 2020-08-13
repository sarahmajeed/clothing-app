import React from 'react'

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
              <div className="card">
                <img className="img" src={shirt.shirtimg} alt="error" />
                <div className="tag">{shirt.tag}</div>
                <div className="price">Price: Rs. {shirt.shirtprice}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ShirtCard
