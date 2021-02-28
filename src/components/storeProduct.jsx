// Styles
import '../styles/components.css';

// const StoreProduct = ({ item, handleAddToCart }) => (
export default function StoreProduct({ product, handleAddToCart }) {
  return (
    <div className="itemWrapper">
      <div className="img"></div>
      <div className="label">
        <p className="name">{product.name}</p>
        <p className="price">$ {product.price} | 10 left</p>
      </div>
      <button className="buyButton" onClick={() => handleAddToCart(product)}>
        BUY
      </button>
    </div>
  );
}
