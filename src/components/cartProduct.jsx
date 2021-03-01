// Styles
import '../styles/components.css';

// const StoreProduct = ({ product, handleAddToCart }) => (
export default function cartProduct({ product, addToCart, removeFromCart }) {
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

        {/* <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(product.id)}
        >
          -
        </Button>
        <p>{product.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(product)}
        >
          +
        </Button> 
      </div>*/}
      </div>
      <div className="cartButtonsWrapper">
        <h4 className="cartAddButton">+</h4>
        <h4 className="cartRemoveButton">-</h4>
      </div>
    </div>
  );
}
