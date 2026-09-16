import { useEffect, useState } from "react";
import "./Nammos.css";



import ocean from "../assets/ocean.jpg";
import ocean1 from "../assets/ocean1.jpg";
import ocean2 from "../assets/ocean2.jpg";
import ocean3 from "../assets/ocean3.jpg";
import ocean4 from "../assets/ocean4.jpg";
import ocean5 from "../assets/ocean5.jpg";
import ocean6 from "../assets/ocean6.jpg";
import dubai1 from "../assets/dubai1.png";
import seafood from "../assets/seafood.png";
import heritage from "../assets/heritage.png";
import worldMap from "../assets/world2.PNG";

import dubai8 from "../assets/dubai8.PNG";
import limassol from "../assets/limassol.PNG";
import london from "../assets/london.PNG";
import cannes from "../assets/cannes.PNG";
import montenegro from "../assets/montenegro.PNG";
import bajasardinia from "../assets/bajasardinia.PNG";
import scotland from "../assets/scotland.PNG";
import logo from "../assets/logo.PNG";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";


const slides = [
  {
    image: ocean,
    title: "NAMMOS",
    location: "MYKONOS",
  },
  {
    image: ocean1,
    title: "NAMMOS",
    location: "MYKONOS",
  },
  {
    image: ocean2,
    title: "NAMMOS",
    location: "MYKONOS",
  },
  {
    image: ocean3,
    title: "NAMMOS",
    location: "MYKONOS",
  },
  {
    image: ocean4,
    title: "NAMMOS",
    location: "MYKONOS",
  },
  {
    image: ocean5,
    title: "NAMMOS",
    location: "MYKONOS",
  },
  {
    image:ocean6,
    title: "NAMMOS",
    location:"MYKONOS",
  }
];

const destinations = [
  "GREECE",
  "LIMASSOL",
  "UNITED KINGDOM",
  "DUBAI",
];

const Nammos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [showDropdown, setShowDropdown] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nammos-page">

      {/* ================= HEADER ================= */}

      <header className="nammos-header">

        <div className="nammos-logo">
          NAMMOS
        </div>

        <div className="nammos-header-right">

          <button
  className="book-btn"
  onClick={() => setShowDropdown(!showDropdown)}
>
  BOOK NOW
  <span className="book-arrow">⌄</span>
</button>

 {showDropdown && (
    <div className="book-dropdown">
      <div>Nammos Dubai</div>
      <div>Nammos Limassol</div>
      <div>Nammos Mykonos</div>
      <div>Nammos Cannes</div>
      <div>Nammos Baja Sardinia</div>
      <div>Nammos London</div>
      <div>Nammos Montenegro</div>
    </div>
  )}



          <div className="nammos-hamburger">
            <span></span>
            <span></span>
          </div>

        </div>

      </header>


      {/* ================= HERO SLIDER ================= */}

      <section className="nammos-slider">

        {/* IMAGE */}

        <img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt="Nammos Mykonos"
          className="slider-image"
        />


        {/* DARK OVERLAY */}

        <div className="slider-overlay"></div>


        {/* CENTER TEXT */}

        <div className="slider-content">

          <h1>{slides[currentSlide].title}</h1>

          <p>{slides[currentSlide].location}</p>

        </div>


        {/* PREVIOUS BUTTON */}

        <button
          className="slider-arrow slider-prev"
          onClick={prevSlide}
        >
          ←
        </button>


        {/* NEXT BUTTON */}

        <button
          className="slider-arrow slider-next"
          onClick={nextSlide}
        >
          →
        </button>


        {/* DOTS */}

        <div className="slider-dots">

          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}

        </div>


        {/* WHITE LINE */}

        <div className="slider-line"></div>


        {/* DESTINATIONS */}

        <div className="destination-wrapper">

          <div className="destination-track">

            {[...destinations, ...destinations].map(
              (destination, index) => (
                <div
                  className="destination"
                  key={index}
                >
                  <span>{destination}</span>

                  <i></i>
                </div>
              )
            )}

          </div>

        </div>

      </section>
      <section className="welcome-section">

  <div className="welcome-image">
    <img src={dubai1} alt="Welcome to Nammos" />
  </div>

  <div className="welcome-content">

    <h1>
      Welcome to the
      <br />
      World of
      <br />
      Nammos
    </h1>

    <p>
      Born where sun, sea, and emotion converge,
      Nammos captures the essence of an authentic
      Mediterranean lifestyle, a world where joy is not an escape but a way of life. From its origins on the shores of Mykonos, to its global destinations, Nammos celebrates connection, celebration, and the art of living beautifully. Every experience from dining to hospitality and retail is crafted with effortless elegance, genuine warmth, and an unwavering commitment to detail.
    </p>

  </div>
  </section>
  {/* Gastronomy Section */}
<section
       className="gastronomy-section">
     <div className="gastronomy-content">
    

    <p>
      Gastronomy lies at the heart of Nammos, the essence of its history.
      Rooted in Mediterranean simplicity and inspired by the flavours of
      the sea, each dish celebrates pure ingredients elevated through
      craftsmanship and emotion. Honouring its Mykonian heritage, while
      embracing global influences, Nammos transforms dining into a sensory
      ritual that captures the warmth and generosity of the Mediterranean.
    </p>
  </div>

  <div className="gastronomy-image">
    <img src={seafood} alt="Nammos Gastronomy" />
  </div>
</section>

{/* Luxury Spaces Section */}
<section className="luxury-section">
<div className="luxury-image">
    <img src={heritage} alt="Nammos Luxury Space" />
  </div>


  <div className="luxury-content">
    

    <p>
      Every Nammos space tells a story of understated luxury
      and effortless sophistication. Inspired by its Mykonian
      heritage, interiors flow seamlessly into the outdoors,
      dissolving boundaries between nature and design. Light,
      sound, and texture are orchestrated with precision,
      setting the stage for moments that feel timeless.
      More than a setting, Nammos is an atmosphere; sunlit,
      joyful and imbued with the spirit of Mediterranean living.
    </p>
  </div>

</section>
{/* DESTINATIONS SECTION */}
<section className="destinations-section">

  {/* Black Line */}
  <div className="destinations-line"></div>

  <h1 className="destinations-title">
    DESTINATIONS
  </h1>

  <h2 className="world-title">
    WORLD
  </h2>

  <div className="world-wrapper">

    <img
      src={worldMap}
      alt="World Map"
      className="world-map"
    />

    

    <div className="destination destination-dubai">
      <div className="destination-circle">
        <img src={dubai8} alt="Dubai" />
      </div>
      <span>DUBAI</span>
    </div>

    <div className="destination destination-limassol">
      <div className="destination-circle">
        <img src={limassol} alt="Limassol" />
      </div>
      <span>LIMASSOL</span>
    </div>

    <div className="destination destination-london">
      <div className="destination-circle">
        <img src={london} alt="London" />
      </div>
      <span>LONDON</span>
    </div>

    <div className="destination destination-cannes">
      <div className="destination-circle">
        <img src={cannes} alt="Cannes" />
      </div>
      <span>CANNES</span>
    </div>

    <div className="destination destination-sardinia">
      <div className="destination-circle">
        <img src={bajasardinia} alt="Sardinia" />
      </div>
      <span>BAJA SARDINIA</span>
    </div>

    <div className="destination destination-montenegro">
      <div className="destination-circle">
        <img src={montenegro} alt="Montenegro" />
      </div>
      <span>MONTENEGRO</span>
    </div>

  </div>

<div className="destinations-bottom-line"></div>


</section>
<div className="newsletter-header">
  <img src={logo} alt="Nammos Logo" className="newsletter-logo" />

  <div className="newsletter-actions">
    <button className="book-now-btn">
      BOOK NOW
    </button>

    <div className="hamburger">
      ☰
    </div>
  </div>
</div>
<section className="newsletter-section">

  <div className="newsletter-left">
    <p>NAMMOS</p>
    <p>NAMMOS MYKONOS</p>
    <p>NAMMOS VILLAGE</p>
    <p>NAMMOS DUBAI</p>
    <p>NAMMOS LONDON</p>
    <p>NAMMOS DOHA</p>
    <p>NAMMOS CANNES</p>
    <p>NAMMOS LIMASSOL</p>
    <p>NAMMOS BAJA SARDINIA</p>
    <p>NAMMOS MONTENEGRO</p>
  </div>

  <div className="newsletter-center">
    <div className="newsletter-image">
  <img src={scotland} alt="Newsletter" />
</div>
    <h2>NEWSLETTER</h2>



    <div className="newsletter-input">
      <input
        type="email"
        placeholder="Your email here"
      />
      <button>OK</button>
    </div>

    <div className="social-icons">
  <FaFacebookF />
  <FaInstagram />
  <FaYoutube />
  <FaLinkedinIn />
</div>

  </div>

  <div className="newsletter-right">
    <p>LATEST NEWS</p>
    <p>PRESS INQUIRIES</p>
    <p>CAREER</p>

    <div className="contact-space">
      <p>CONTACT & RESERVATIONS</p>
    </div>
  </div>

</section>

<div className="newsletter-footer">
  <span>TERMS OF SERVICE</span>
  <span>PRIVACY POLICY</span>
</div>

</div>

  );
};
export default Nammos;
