import React from "react";
import "./card.css";
const card = (props) => {
  return (
    <>
      <div className="card">
        <div className="header">
          <div className="image-wrapper">
          <img
            src={props.image}
            alt="img"
          />
          </div>
          
        </div>
        <div className="content">
          <p>{props.time}</p>
          <h1>{props.post}</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio voluptas ad nam alias cupiditate?</span>
        </div>
        <div className="stats">
            <div className="first">
                <p className="value">{props.read}</p><p className="status">Reads</p>
            </div>
            <div className="second"> 
            <p className="value">{props.views}</p><p className="status">Views</p>
            </div>
            <div className="third">
            <p className="value">{props.cmmnts}</p><p className="status">Comments</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default card;
