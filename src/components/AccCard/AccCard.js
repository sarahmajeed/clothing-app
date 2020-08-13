import React from 'react'

function AccCard({ acc, search }) {
  const filteredAcc = acc.filter(acc => {
    return acc.tag.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="kurticard">
      {
        filteredAcc.map(acc => {
          return (
            <div className="card">
              <img className="img" src={acc.accimg} alt="error" />
              <div className="tag">{acc.tag}</div>
              <div className="price">Price: Rs. {acc.accprice}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AccCard
