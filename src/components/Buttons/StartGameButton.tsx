type TypeProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const StartGameButton = ({ handleClick }: TypeProps) => {
  return (
    <button className="start-game btn" onClick={handleClick}>
      Start Game
    </button>
  );
};

export default StartGameButton;
