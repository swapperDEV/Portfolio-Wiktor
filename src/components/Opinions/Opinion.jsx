import React from "react";

export const Opinion = (props) => {
  let stars = [];
  for (let i = 0; i < props.stars; i++) {
    stars.push("star");
  }
  return (
    <>
      <div className="opinion" data-aos="fade-up">
        <div
          className="opinion_avatar"
          style={{ backgroundImage: `url("${props.avatar}")` }}
        ></div>
        <div className="opinion_top">
          <div className="top_left">
            <p className="opinion_author">{props.author}</p>
            <p className="opinion_author_type">{props.authorType}</p>
          </div>
          <div className="top_right">
            {stars.map((index) => (
              <i className="fas fa-star"></i>
            ))}
          </div>
        </div>
        <div className="opinion_line">
          <div className="line">
            <p>
              <i className="fas fa-quote-right"></i>
            </p>
            <hr />
          </div>
        </div>
        <div className="opinion_bottom">{props.description}</div>
      </div>
    </>
  );
};
