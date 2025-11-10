import { useState } from "react";
import { Die } from "./Die";
import { Reroll } from "./Reroll";
import { nanoid } from "nanoid";
import { Newgame } from "./NewGame";

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
  };

  function hold(id) {

    setNewDice((prev) =>
      prev.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    );
  }

  //   (function gameWon() {
  //     console.log(
  //       newDice.every((die) => die.isHeld && die?.value === newDice[0].value)
  //     );
  //   }) ()

  const gameWon = newDice.every(
    (die) => die.isHeld && die?.value === newDice[0].value
  );

  return (
    <div className="flex flex-col justify-center ">
      <div className="dice-grid">{dice}</div>
      {gameWon ? 
      <Newgame restart={() => setNewDice(generateAllNewDice())}/>
      : 
      <Reroll reroll={() => reroll()} />
      }
    </div>
  );
};
