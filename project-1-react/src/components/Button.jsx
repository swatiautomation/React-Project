const Button = ({ value, isHeld, hold, id }) => {
  return (
    <button
      className="buttons"
      style={{ backgroundColor: isHeld ? "#59E391" : "white" }}
      onClick={() => hold(id)}
      aria-pressed={isHeld}
      aria-label={`Dice with value ${value},
      ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
};

export default Button;
