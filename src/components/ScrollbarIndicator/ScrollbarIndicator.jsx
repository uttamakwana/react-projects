// scrollbar-indicator.js
import { useState } from "react";
import "./scrollbar-indicator.css";

const ScrollbarIndicator = () => {
  const [indicator, setIndicator] = useState(0);
  function handleScroll(e) {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setIndicator((scrollTop / (scrollHeight - clientHeight)) * 100);
  }

  return (
    <section className="scrollbar-indicator-container">
      <header className="scrollbar-header flex-center">
        <h1 className="heading text-center">Custom Scrollbar Indicator</h1>
      </header>
      <div
        className="scroll-indicator"
        style={{ width: `${indicator}%` }}
      ></div>
      <div className="scrollbar-container" onScroll={handleScroll}>
        {[...Array(100)].map((_, index) => (
          <p key={index} className="mb-4 mr-4 br-5 text-justify p-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            aperiam facere.
          </p>
        ))}
      </div>
    </section>
  );
};

export default ScrollbarIndicator;
