import React from "react";
import imgTest from "../../../assets/images/bg11.jpg";

export const Post = (props) => {
  const { content, date, creator, description, name, img } = props;
  return (
    <>
      <div className="carousel_item">
        <div className="carousel_item_child">
          <div
            className="post_img"
            style={{ backgroundImage: `url("${imgTest}")` }}
          ></div>
          <p className="post_title"> {name}</p>
          <div className="post_data">
            <p>
              <i className="fas fa-user-alt"></i> {creator}
            </p>{" "}
            <p className="post_time">
              <i className="fas fa-clock"></i> {date}
            </p>
          </div>
          <p className="post_description">{description}</p>
          <button className="post_readmore">Read More</button>
        </div>
      </div>
    </>
  );
};
