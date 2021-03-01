// Styles
import '../styles/components.css';

export default function cartProduct({
  product,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  return (
    <div className="cartItemWrapper">
      <div className="cartImgWrapper"></div>
      <div className="cartQuantityWrapper">
        <div>
          <h4>{product.name}</h4>
        </div>
        <div className="cartQuantity">
          <h5>Qty: {product.amount}</h5>
          <h5>Total: R${(product.amount * product.price).toFixed(2)}</h5>
        </div>
      </div>
      <div className="cartButtonsWrapper">
        <h4 onClick={() => handleAddToCart(product)} className="cartAddButton">
          +
        </h4>
        <h4
          onClick={() => handleRemoveFromCart(product.id)}
          className="cartRemoveButton"
        >
          -
        </h4>
      </div>
    </div>
  );
}
