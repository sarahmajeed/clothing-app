import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './KurtiCard.scss';


function KurtiCard({ kurtis, search }) {

  const filteredKurtis = kurtis.filter(kurti => {
    return kurti.tag.toLowerCase().includes(search.toLowerCase())
  })

  // const handlePictureClick = () => {
  //   console.log('working')
  // }

  return (

    <div className="kurticard">
      {
        filteredKurtis.map(kurti => {
          return (
            <Link className="link" to={`/women/kurtis/${kurti.kurtiid}`}>
              <div className="card">
                <div className="container">
                  <img className="img" src={kurti.kurtiimg} alt="error" />
                </div>
                <div className="tag">{kurti.tag}</div>
                <div className="span"></div>
                <div className="price">Price: Rs. {kurti.kurtiprice}</div>
              </div>
            </Link>
          )
        })
      }
    </div >
  )
}

export default KurtiCard
