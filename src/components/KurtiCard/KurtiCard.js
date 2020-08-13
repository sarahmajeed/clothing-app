import React, { useState } from "react";
import "./KurtiCard.scss";
import PictureDiscription from "../../pages/PictureDiscription/PictureDiscription";

function KurtiCard({ kurtis, search }) {
  const [discriptionVisible, setDescriptionVisible] = useState(false);

  const filteredKurtis = kurtis.filter((kurti) => {
    return kurti.tag.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="kurticard">
        {filteredKurtis.map((kurti) => {
          return (
            <div className="card" onClick={() => setDescriptionVisible(true)}>
              <img className="img" src={kurti.kurtiimg} alt="error" />
              <div className="tag">{kurti.tag}</div>
              <div className="price">Price: Rs. {kurti.kurtiprice}</div>
              <PictureDiscription
                data={{
                  title: kurti.tag,
                  image: kurti.kurtiimg,
                  price: kurti.kurtiprice,
                }}
                visible={discriptionVisible}
                setVisible={setDescriptionVisible}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default KurtiCard;
