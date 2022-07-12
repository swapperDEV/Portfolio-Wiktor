import "./style/about.css";

import React, { useEffect, useState } from "react";
const aboutTranslations = [
  "About me",
  "O mnie",
  "About me",
  "über mich",
  "About me",
  "À propos de moi",
  "About me",
  "Su di me",
  "About me",
  "Sobre mí",
  "About me",
  "私について",
  "About me",
  "عني",
  "About me",
  "Om meg",
  "About me",
  "Over mij",
  "About me",
  "O mně",
  "About me",
  "Om mig",
  "About me",
  "Oбо мне",
  "About me",
  "Sobre mim",
];
export const AboutHeadline = () => {
  const [counter, updateCounter] = useState(0);
  const [render, setRender] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      updateCounter((prevCounter) => {
        if (prevCounter === aboutTranslations.length - 1) {
          return 0;
        } else {
          return prevCounter + 1;
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 300);
  }, [counter]);
  return (
    <div className="headline" data-aos="flip-up">
      {render && <a>{aboutTranslations[counter]}</a>}
    </div>
  );
};
