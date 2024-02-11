// stars
import { useState } from "react";
import { StarIcon } from "../../constants/icons";
// css
import "./star-rating.css";

const StarRating = () => {
  const [star, setStar] = useState(-1);
  const [hover, setHover] = useState(-1);
  // handle click
  function handleClick(currentIndex) {
    setStar(currentIndex);
  }
  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }
  function handleMouseLeave() {
    setHover(star);
  }
  return (
    <div className="star-rating-container absolute-center flex gap-4">
      {[...Array(5)].map((star, index) => (
        <StarIcon
          key={index}
          className={`star-icon ${index <= hover || star ? "active" : ""}`}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default StarRating;
