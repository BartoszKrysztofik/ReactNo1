const Button = ({ setCount }) => {
  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      Dodaj klik
    </button>
  );
};

export default Button;
