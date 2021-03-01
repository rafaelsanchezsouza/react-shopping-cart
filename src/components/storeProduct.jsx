// Styles
import '../styles/components.css';

// const StoreProduct = ({ item, handleAddToCart }) => (
export default function StoreProduct({
  product,
  handleAddToCart,
  cartProduct,
}) {
  return (
    <div className="itemWrapper">
      <div className="img"></div>
      <div className="label">
        <p className="name">{product.name}</p>
        <p className="price">
          $ {product.price.toFixed(2)} |{' '}
          {product.available - (cartProduct ? cartProduct.amount : 0)} left
        </p>
      </div>
      <button className="buyButton" onClick={() => handleAddToCart(product)}>
        BUY
      </button>
    </div>
  );
}
