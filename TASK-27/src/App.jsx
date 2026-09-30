import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div>
      <h1>Products</h1>
     <div className="product-list">
  {data.products.map((product) => (
    <div className="product-card" key={product.id}>
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
    </div>
  ))}
</div>
    </div>
  );
}

export default App;