import { useState, useEffect } from "react";
import "./SummerLife.css";

import summer1 from "../../assets/summer.jpg";
import summer2 from "../../assets/summer2.jpg";
import summer3 from "../../assets/summer3.jpg";
import summer4 from "../../assets/summer4.jpg";
import summer5 from "../../assets/summer5.jpg";
import summer6 from "../../assets/summer6.jpg";
import summer7 from "../../assets/summer7.jpg";
import summer8 from "../../assets/summer8.jpg";
import summer9 from "../../assets/summer9.jpg";
import summer10 from "../../assets/summer10.jpg";

const SummerLife = () => {
  const images = [
    summer1,
    summer2,
    summer3,
    summer4,
    summer5,
    summer6,
    summer7,
    summer8,
    summer9,
    summer10,
  ];

  const statements = [
    "MUST BE EXPERIENCED AND THEN .. RELIVED",
    "WHERE SUMMER NEVER ENDS",
    "LIVE THE MYKONOS EXPERIENCE",
    "SUMMER MEMORIES START HERE",
    "A MOMENT WORTH REMEMBERING",
    "FEEL THE MAGIC OF MYKONOS",
    "MADE FOR UNFORGETTABLE SUMMERS",
    "YOUR SUMMER YOUR STORY",
    "EXPERIENCE THE EXTRAORDINARY",
    "THIS IS SUMMER LIFE",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  return (
    <section className="summer-life">
      <div className="summer-slider">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Nammos Summer"
        />

        <div className="statement-text">{statements[currentIndex]}</div>

        <div className="moving-text">
          <span>MYKONOS IS ALWAYS A GOOD IDEA</span>
          <span>MYKONOS IS ALWAYS A GOOD IDEA</span>
        </div>

        <button className="prev-btn" onClick={prevSlide}>
          ‹
        </button>

        <button className="next-btn" onClick={nextSlide}>
          ›
        </button>

        <div className="slide-number">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </section>
  );
};

export default SummerLife;
