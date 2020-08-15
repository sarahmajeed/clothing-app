import React from 'react';
import { Link } from 'react-router-dom';

function AccCard({ acc, search }) {
  const filteredAcc = acc.filter(acc => {
    return acc.tag.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="kurticard">
      {
        filteredAcc.map(acc => {
          return (
            <Link className="link" to={`/accessories/${acc.accid}`}>
              <div className="card">
                <div className="container">
                  <img className="img" src={acc.accimg} alt="error" />
                </div>
                <div className="tag">{acc.tag}</div>
                <div className="span"></div>
                <div className="price">Price: Rs. {acc.accprice}</div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default AccCard
