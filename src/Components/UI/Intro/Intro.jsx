import React, { useEffect, useState } from "react";
import "./intro.scss";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true); // Tugma dastlab ko'rinadi

  // Scroll eventni kuzatish
  useEffect(() => {
    const handleScroll = () => {
      // Agar foydalanuvchi scroll qilsa, tugma yo'qoladi
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        // Sahifaning yuqorisiga qaytganda tugma yana ko'rinadi
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="intro">
      <div className="intro2">
        <div className="intro__container">
          <div className="scroll-to-top">
            {isVisible && (
              <div className="scroll-to-top">
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
