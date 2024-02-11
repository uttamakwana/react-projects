import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
// css
import "./image-slider.css";
// icons
import { LeftIcon, RightIcon } from "../../constants/icons";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=5"
        );
        const data = await response.json();
        if (data) {
          setLoading(false);
          setImages(data);
        } else {
          setLoading(false);
          setImages(null);
        }
      } catch (error) {
        setLoading(false);
        setImages(null);
      }
    };
    fetchImages();
  }, []);

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  return loading ? (
    <Loader />
  ) : (
    <section className="image-slider-container absolute-center container">
      <h1 className="image-slider-header heading text-center mb-1">
        Beautiful Images
      </h1>
      {images && images.length > 0 ? (
        <div className="image-slider margin-inline-auto">
          <LeftIcon
            className="image-slider-arrow arrow-left"
            onClick={handlePrevious}
          />
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className={`slide ${
                currentSlide === index ? "active" : "hidden"
              }`}
              loading="lazy"
            />
          ))}
          <RightIcon
            className="image-slider-arrow arrow-right"
            onClick={handleNext}
          />
          <div className="image-slider-buttons flex-center gap-4">
            {[...Array(images.length)].map((_, index) => (
              <button
                key={index}
                className={currentSlide === index ? "active" : ""}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      ) : (
        <p className="error">Something went wrong!</p>
      )}
    </section>
  );
};

export default ImageSlider;
