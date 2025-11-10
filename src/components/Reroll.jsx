export const Reroll = ({ reroll }) => {
  return (
    <button onClick={reroll} className="roll-btn"
    aria-label={`Congrats You won ,CLick to start a new game `}>
    
      Roll
    </button>
  );
};
