type TypeProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const NewGameButton = ({ handleClick }: TypeProps) => {
  return (
    <button className="start-game btn" onClick={handleClick}>
      New Game
    </button>
  );
};

export default NewGameButton;
