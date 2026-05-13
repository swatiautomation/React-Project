const Card = ({
  image,
  title,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  details,
  exchangeOffer,
  bankOffer,
}) => {
  return (
    <div className="mainContainer">
      <div className="imageDetails">
        <img src={image} alt="Image one" />
      </div>

      <div className="containerTwo">
        <div className="descriptionContainer">
          <h2 className="title">{title}</h2>
          <div className="rating">
            <p>⭐{rating}</p>
            <p>|</p>
            <p>{reviews}</p>
          </div>
          <div className="details">
            {details}
          </div>
          <p className="exchangeOffer">{exchangeOffer}</p>
          <p className="bankOffer">{bankOffer}</p>
        </div>

        <div className="priceDetails">
          <h2 className="Price">{price}</h2>
          <p className="originalPrice">{originalPrice}</p>
          <p className="discount">{discount}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
