import { useState } from "react";
import "./App.css";

function App() {
  const shoes = [
    {
      id: 1,
      name: "Running Shoes",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Sports Shoes",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Casual Shoes",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Sneakers",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(shoe) {
    const existingShoe = cart.find((item) => item.id === shoe.id);

    if (existingShoe) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="app">
      <header>
        <h1>Shoe Store</h1>
      </header>

      <main>
        <section className="shoes-section">
          <h2>Available Shoes</h2>

          <div className="shoe-list">
            {shoes.map((shoe) => (
              <div className="shoe-card" key={shoe.id}>
                <img src={shoe.image} alt={shoe.name} />

                <h3>{shoe.name}</h3>

                <p>₹{shoe.price}</p>

                <button onClick={() => addToCart(shoe)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="cart">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}

              <h2>Total: ₹{total}</h2>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;