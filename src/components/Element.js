import { useEffect, useState } from "react";
import styles from "./Element.module.css";

const Element = ({
  handleCheck,
  handleDelete,
  children,
  checkedFlag,
  handleSave,
  index,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [edited, setEdited] = useState(children);

  const renderElements = () => {
    if (editMode) {
      return (
        <div className={styles.container}>
          <input
            type="text"
            value={edited}
            onChange={(e) => setEdited(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => handleSave(edited, index)}
          >
            Save
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <p>{edited}</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => setEditMode(true)}>
              Edit
            </button>
            <button className={styles.button} onClick={() => handleDelete()}>
              Delete
            </button>
            <input
              type="checkbox"
              value={children}
              checked={checkedFlag}
              onChange={(e) => handleCheck(e)}
            ></input>
          </div>
        </div>
      );
    }
  };

  return <>{renderElements()}</>;
};

export default Element;
