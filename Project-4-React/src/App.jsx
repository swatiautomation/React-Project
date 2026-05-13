import "./App.css";
import Card from "./components/Card";
import data from "./data.json";

function App() {
  return (
    <div className="main">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            rating={item.rating}
            reviews={item.reviews}
            price={item.price}
            originalPrice={item.originalPrice}
            discount={item.discount}
            details={item.details.map((insideItem, index) => {
              return <p key={index}>• {insideItem}</p>;
            })}
            exchangeOffer={item.offers.exchangeOffer}
            bankOffer={item.offers.bankOffer}
          />
        );
      })}
    </div>
  );
}

export default App;
