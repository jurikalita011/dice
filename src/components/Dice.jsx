import React, { useState } from "react";
import styles from "../styles/Dice.module.css";
export const Dice = () => {
  const [dice, setDice] = useState(() => Math.floor(Math.random() * 6) + 1);

  let diceArray = new Array(9).fill(null);

  const handleClick = () => {
    setDice(Math.floor(Math.random() * 6) + 1);
  };
  // console.log(dice, "dice");
  return (
    <>
      <div className={`${styles.dice} ${styles["dot" + dice]}`}>
        {diceArray.map((el, ind) => {
          return <div key={ind}></div>;
        })}
      </div>
      <button onClick={handleClick}>Roll Dice</button>
    </>
  );
};
