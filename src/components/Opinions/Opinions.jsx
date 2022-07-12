import React, { forwardRef, useEffect } from "react";
import { Opinion } from "./Opinion";
import "./styles/opinions.css";
import memoji1 from "../../assets/images/memoji/Memoji-04.png";
import memoji2 from "../../assets/images/memoji/Memoji-10.png";
import memoji3 from "../../assets/images/memoji/Memoji-18.png";
import "aos/dist/aos.css";

export const Opinions = forwardRef((props, ref) => {
  const Opinions = [
    {
      author: "Wiktor Unnam",
      authorType: "Client",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quaerat perferendis nulla eveniet, error laboriosam vero soluta",
      avatar: memoji1,
    },
    {
      author: "Erling Haaland",
      authorType: "Graphic Designer",
      stars: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quaerat perferendis nulla eveniet, error laboriosam vero soluta",
      avatar: memoji2,
    },
    {
      author: "Random Pip",
      authorType: "Frontend Dev",
      stars: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quaerat perferendis nulla eveniet, error laboriosam vero soluta",
      avatar: memoji3,
    },
  ];
  return (
    <>
      <div className="opinions_section" ref={ref}>
        <div className="opinions">
          {Opinions.map((opinion) => (
            <Opinion
              avatar={opinion.avatar}
              author={opinion.author}
              authorType={opinion.authorType}
              description={opinion.description}
              stars={opinion.stars}
            />
          ))}
        </div>
      </div>
    </>
  );
});
