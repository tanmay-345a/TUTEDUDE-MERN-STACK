import "./App.css";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment.jsx";
function App() {
const navigate = useNavigate();
  const {
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  totalPrice,
} = useCart();

if (window.location.pathname === "/payment") {
  return <Payment />;
}

  const shoes = [
  {
    id: 1,
    name: "White Casual Sneaker",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    name: "Black Running Shoes",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500",
  },
  {
    id: 3,
    name: "Classic Sports Shoes",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
  },
  {
    id: 4,
    name: "Blue Training Shoes",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500",
  },
  {
    id: 5,
    name: "White Sports Shoes",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
  },
  {
    id: 6,
    name: "Black Casual Shoes",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500",
  },
  {
    id: 7,
    name: "Grey Running Shoes",
    price: 78,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500",
  },
  {
    id: 8,
    name: "Brown Ankle Boots",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500",
  },
];

  return (
    <div>
      <nav>
        <h2>👟 Shoe Store</h2>
        <div>
          <span>Home</span>
          <span>Categories</span>
          <span>About Us</span>
        </div>
      </nav>

      <div className="container">
        <div className="products">
          <h1>Shoes Collection</h1>

          <div className="shoe-list">
            {shoes.map((shoe) => (
              <div className="shoe-card" key={shoe.id}>
                <img src={shoe.image} alt={shoe.name} />

                <h3>{shoe.name}</h3>
                <p>${shoe.price}</p>

                <button onClick={() => addToCart(shoe)}>
                 Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart">
  <h2>Cart</h2>

  {cart.length === 0 ? (
    <p>No items in cart</p>
  ) : (
    <>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div>
            <h4>{item.name}</h4>
            <p>${item.price}</p>

            <div className="quantity">
              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>
            </div>

            <button
              className="remove"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      <button onClick={() => navigate("/payment")}>
       Proceed To Payment
      </button>
    </>
  )}
</div>
      </div>
    </div>
  );
}

export default App;