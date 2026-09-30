import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <button onClick={() => navigate("/")}>
      Back to Shopping
      </button>

      <div className="payment-container">
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="payment-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Price: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
        <div className="payment-form">
  <h2>Credit Card Payment</h2>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert("Payment Successful!");
      clearCart();
    navigate("/");
    }}
  >
    <input
      type="text"
      placeholder="Cardholder Name"
      required
    />

    <input
      type="text"
      placeholder="Card Number"
      maxLength="16"
      required
    />

    <div className="card-details">
      <input
        type="text"
        placeholder="Expiry Date (MM/YY)"
        required
      />

      <input
        type="password"
        placeholder="CVV"
        maxLength="3"
        required
      />
    </div>

    <button type="submit">
      Pay Now
    </button>
  </form>
</div>

        
       
      </div>
    </div>
  );
}

export default Payment;