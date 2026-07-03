const Button = ({ name, onClick }) => {
  return (
    <div className="bg-blue-300 text-white p-4 rounded-lg w-60 text-center cursor-pointer" onClick={onClick}>
      {name}
    </div>
  );
};

export default Button;
