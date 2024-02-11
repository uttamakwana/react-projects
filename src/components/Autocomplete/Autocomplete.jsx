import { useEffect, useState } from "react";
import "./auto-complete.css";

const Autocomplete = () => {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [product, setProduct] = useState();

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setProduct(null);
      if (input) {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${input}`
        );
        const data = await response.json();
        if (data.products.length === 0) {
          setError("No products found!");
        }
        setProducts(data.products);
      } else {
        setProducts(null);
        setError("");
      }
    };
    fetchProducts();
  }, [input]);

  // handle findProduct
  async function findProduct(product) {
    setInput("");
    setProducts(null);
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${product.id}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="auto-complete-container">
      <h1 className="heading text-center pb-1">Autocomplete</h1>
      <div className="auto-complete-input">
        <input
          type="search"
          name="auto-complete-input"
          id="auto-complete-input"
          placeholder="Find products..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {products && products.length > 0 && input ? (
        <ul className="auto-complete-product-list">
          {products.map((product, index) => (
            <li
              key={product.id}
              className="auto-complete-product-list-item"
              onClick={() => findProduct(product)}
            >
              {index} - {product.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-2 pb-1 text-center auto-complete-error">{error}</p>
      )}
      {product && (
        <div className="auto-complete-product-card flex-between gap-4">
          <img src={product.thumbnail} alt={product.title} />
          <div className="auto-complete-product-card-content">
            <p className="subheading">{product.title}</p>
            <p className="text-2">{product.description}</p>
            <p className="text">{product.stock}</p>
            <p className="subheading">₹{product.price}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Autocomplete;
