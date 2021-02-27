// Styles
import './storeProduct.css';

// const StoreProduct = ({ item, handleAddToCart }) => (
export default function StoreProduct({ product }) {
  return (
    <div className="wrapper">
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <h3>10</h3>
      {/* <h3>Banana</h3>
      <p>10</p>
      <h3>10</h3> */}
    </div>
  );
}
