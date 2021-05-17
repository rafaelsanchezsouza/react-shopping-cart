// Styles
import '../styles/components.css';
import cartProduct from './cartProduct';

// const StoreProduct = ({ item, handleAddToCart }) => (
export default function StoreProduct({
  product,
  handleAddToCart,
  cartProducts,
}) {
  console.log('Print: ');
  function calculateAmount() {
    const amount = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    )
      ? cartProducts.find((cartProduct) => cartProduct.id === product.id).amount
      : 0;
    return amount;
  }
  console.log(calculateAmount());
  return (
    <div className="itemWrapper">
      <div className="img">
        {/* <img src={`../assets/${product.name}.jpg`} alt={product.name}></img> */}
        <img src={`${product.name}.jpg`} alt={product.name}></img>
      </div>
      <div className="label">
        <p className="name">{product.name}</p>
        <p className="price">
          $ {product.price.toFixed(2)} |{' '}
          {/* {product.available - (cartProduct.id=== ? cartProduct.amount : 0)} left */}
          {product.available - calculateAmount()} left
        </p>
      </div>
      <button className="buyButton" onClick={() => handleAddToCart(product)}>
        BUY
      </button>
    </div>
  );
}
