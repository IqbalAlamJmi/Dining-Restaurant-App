import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, price, description } = curElem;
          return (
            <div key={id}>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-discription subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag2 subtle">Order Now</span>
                  <span className="card-tag1 subtle"> Price: {price} </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
