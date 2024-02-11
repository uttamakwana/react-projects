import { useEffect, useState } from "react";
// css
import "./product-list.css";
// icons
import { NextIcon, PreviousIcon } from "../../constants/icons.js";
// loader
import Loader from "../Loader/Loader.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(5);
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  // fetchProducts
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=5&skip=${skip}`
      );
      const data = await response.json();
      const fetchedProducts = data.products;
      const addNewPropInFetchedProducts = fetchedProducts.map((p) => {
        return {
          currentSlide: 0,
          ...p,
        };
      });
      setLoading(false);
      setProducts((prevProducts) => [
        ...prevProducts,
        ...addNewPropInFetchedProducts,
      ]);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  function handleLoadMoreProducts() {
    setSkip((prevSkip) => prevSkip + 5);
    fetchProducts();
  }

  // handle previous
  function handlePrevious(product, length) {
    const copyProducts = products.map((p) => {
      if (product.id === p.id) {
        p.currentSlide = p.currentSlide === 0 ? length - 1 : p.currentSlide - 1;
        return p;
      } else {
        return p;
      }
    });
    setProducts(copyProducts);
    // setCurrentProduct(product);
    // setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  }

  // handle next
  function handleNext(product, length) {
    const copyProducts = products.map((p) => {
      if (product.id === p.id) {
        p.currentSlide = p.currentSlide === length - 1 ? 0 : p.currentSlide + 1;
        return p;
      } else {
        return p;
      }
    });
    setProducts(copyProducts);
    // setCurrentProduct(product);
    // setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  }

  // return the component
  return loading ? (
    <Loader />
  ) : (
    <div className="products-container">
      <h1 className="heading text-center mb-1">Product List</h1>
      {products && products.length > 0 ? (
        <div className="product-list-container">
          <div className="product-list">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <div className="product-slider">
                  <div className="product-slider-image-container">
                    <PreviousIcon
                      className="product-slider-arrow product-slider-arrow-left"
                      onClick={() =>
                        handlePrevious(product, product.images.length)
                      }
                    />
                    {product &&
                      product.images.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          className={
                            product.currentSlide === index ? "active" : "hidden"
                          }
                        />
                      ))}
                    <NextIcon
                      className="product-slider-arrow product-slider-arrow-right"
                      onClick={() => handleNext(product, product.images.length)}
                    />
                  </div>
                </div>
                <div className="product-content p-8">
                  <h1 className="text-2 text-left">{product.title}</h1>
                  <p className="text text-left product-content-category">
                    {product.category}
                  </p>
                  <strong className="text-2 product-content-price">
                    ₹{product.price}
                  </strong>
                </div>
              </div>
            ))}
          </div>
          <button
            className="product-list-button text-2 mb-1 pointer"
            onClick={handleLoadMoreProducts}
          >
            Load More Products
          </button>
        </div>
      ) : (
        <p className="error">No products found!</p>
      )}
    </div>
  );
};

export default ProductList;
