const ButtonReduce = ({ setCount }) => {
  return (
    <button
      onClick={() => {
        setCount((prev) => prev - 1);
      }}
    >
      Odejmij klik
    </button>
  );
};

export default ButtonReduce;
