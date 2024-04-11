type TypeProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const HomeButton = ({ handleClick }: TypeProps) => {
  return (
    <button className="btn" onClick={handleClick}>
      Home
    </button>
  );
};

export default HomeButton;
