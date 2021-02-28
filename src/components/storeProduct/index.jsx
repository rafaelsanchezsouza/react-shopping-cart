// Styles
import './styles.css';

// const StoreProduct = ({ item, handleAddToCart }) => (
export default function StoreProduct({ product }) {
  return (
    <div className="wrapper">
      <img src={product.image} alt={product.name} />
      <div className="label">
        <p className="name">{product.name}</p>
        <p className="price">$ {product.price} | 10 left</p>
      </div>
      <button className="buyButton">BUY</button>
    </div>
  );
}
