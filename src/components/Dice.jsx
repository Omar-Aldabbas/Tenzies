import { useState } from "react";
import { Die } from "./Die";
import { Reroll } from "./Reroll";
import { nanoid } from "nanoid";

export const Dice = () => {
  const [newDice, setNewDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const dice = newDice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={hold}
      id={dieObj.id}
    />
  ));

  const reroll = () => {
    setNewDice((prev) =>
      prev.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
    console.log(newDice)
  };

  function hold(id) {
    console.log(id);

    setNewDice((prev) =>
      prev.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    );
  }

  return (
    <div className="flex flex-col justify-center ">
      <div className="dice-grid">{dice}</div>
      <Reroll reroll={() => reroll()} />
    </div>
  );
};
