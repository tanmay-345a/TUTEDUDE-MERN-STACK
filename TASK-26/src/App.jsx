import Card from "./Card";
import "./App.css";

function App() {
  const cards = [
    {
      id: 1,
      name: "Sunset",
      image: "https://picsum.photos/id/10/300/200",
      description: "Beautiful sunset view.",
    },
    {
      id: 2,
      name: "Mountain",
      image: "https://picsum.photos/id/29/300/200",
      description: "A peaceful mountain scene.",
    },
    {
      id: 3,
      name: "Nature",
      image: "https://picsum.photos/id/76/300/200",
      description: "A beautiful view of nature.",
    },
    {
      id: 4,
      name: "Animal",
      image: "https://picsum.photos/id/237/300/200",
      description: "A cute animal.",
    },
    {
      id: 5,
      name: "Forest",
      image: "https://picsum.photos/id/1040/300/200",
      description: "Green forest scenery.",
    },
    {
      id: 6,
      name: "Lake",
      image: "https://picsum.photos/id/1015/300/200",
      description: "A calm lake view.",
    },
  ];

  return (
    <div className="app">
      <h1>React Props Cards</h1>

      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;