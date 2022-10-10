import { useEffect, useState } from "react";

import styles from "./ModifyPanel.module.css";

const ModifyPanel = ({ handleAdd, handleMove }) => {
  const [name, setName] = useState("");

  const handleAddItem = (name) => {
    handleAdd(name);
    setName("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.add}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
        <button onClick={() => handleAddItem(name)} className={styles.button}>
          Add
        </button>
      </div>
      <button onClick={() => handleMove()} className={styles.button}>
        Move to next list
      </button>
    </div>
  );
};

export default ModifyPanel;
