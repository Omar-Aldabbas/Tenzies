export const Newgame = (props) => {
  return (
    <button ref={props.ref} onClick={props.restart} className="restart-btn focus:outline-none focus:ring-4 focus:ring-green-900">
      New Game
    </button>
  );
};
