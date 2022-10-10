import { useEffect, useState } from "react";
import Block from "./Block";
import styles from "./BlockList.module.css";

const BlockList = () => {
  const [newElements, setNewELements] = useState([
    "Carrot",
    "Banana",
    "Chicken",
    "Chalk",
    "Meat",
  ]);
  const [pendingElements, setPendingELements] = useState([
    "arrot",
    "nana",
    "Ccken",
    "Calk",
    "Mat",
  ]);
  const [doneElements, setDoneELements] = useState(["Carr", "Ban", "Ma"]);

  const handleMove = () => {};

  return (
    <div className={styles.container}>
      <Block
        elements={newElements}
        nextList={pendingElements}
        setList={setNewELements}
        handleMove={setPendingELements}
      ></Block>
      <Block
        elements={pendingElements}
        nextList={doneElements}
        setList={setPendingELements}
        handleMove={setDoneELements}
      ></Block>
      <Block
        elements={doneElements}
        nextList={newElements}
        setList={setDoneELements}
        handleMove={setNewELements}
      ></Block>
    </div>
  );
};

export default BlockList;
