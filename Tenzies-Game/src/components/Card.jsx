const Card = ({ name, count, displayCount }) => {
  return (
    <>
      <div className="card">
        {name}
        {count}
      </div>
      <button onClick={displayCount}> Click Me </button>
    </>
  );
};

export default Card;
