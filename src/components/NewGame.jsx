export const Newgame = (props) => {
  return (
    <button onClick={props.restart} className="restart-btn">
      New Game
    </button>
  );
};
