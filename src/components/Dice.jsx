import { useState } from "react";
import { Die } from "./Die";
import { Reroll } from "./Reroll";

export const Dice = () => {
  const [newDice, setNewDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({value: Math.ceil(Math.random() * 6), isHeld: false}));
  }

  const dice = newDice.map((dieObj) => (
    <Die key={dieObj.value} value={dieObj.value} state={dieObj.isHeld} />
  ));

  return (
    <div className="dice-grid">
      {dice}
      <Reroll reroll={() => setNewDice(generateAllNewDice())} />
    </div>
  );
};
