import React from 'react'
import './KurtiCard.scss'

function KurtiCard({ kurtis, search }) {

  const filteredKurtis = kurtis.filter(kurti => {
    return kurti.tag.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="kurticard">
      {
        filteredKurtis.map(kurti => {
          return (
            <div className="card">
              <img className="img" src={kurti.kurtiimg} alt="error" />
              <div className="tag">{kurti.tag}</div>
              <div className="price">Price: Rs. {kurti.kurtiprice}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default KurtiCard
