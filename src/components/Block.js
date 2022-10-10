import { useEffect, useState } from "react";
import Element from "./Element";
import ModifyPanel from "./ModifyPanel";
import styles from "./Block.module.css";

const Block = ({ elements, setList, nextList, handleMove }) => {
  const [checked, setChecked] = useState([]);

  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      console.log(checked);
      updatedList = [...checked, e.target.value];
    } else {
      console.log(checked);
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handleDelete = (index) => {
    let items = [...elements];
    items.splice(index, 1);
    setList(items);
  };

  const handleAdd = (item) => {
    let items = [...elements];
    items.push(item);
    setList(items);
  };

  const handleMoveItem = () => {
    const items = [...elements];
    const nextItems = [...nextList];
    const diff = (items, checked) => {
      return items
        .filter((i) => !checked.includes(i))
        .concat(checked.filter((i) => !items.includes(i)));
    };
    const left = (items, checked) => {
      return items
        .filter((i) => checked.includes(i))
        .concat(checked.filter((i) => !items.includes(i)));
    };
    const leftItems = left(items, checked);
    const diffItems = diff(items, checked);
    const newNextList = [...nextItems, ...leftItems];
    setList(diffItems);
    handleMove(newNextList);
    setChecked([]);
  };

  const handleSave = (elem, index) => {
    let updatedList = [...elements];
    updatedList.splice(index, 1, elem);
    setList(updatedList);
  };

  const renderElements = () => {
    return elements.map((elem, index) => {
      let updatedList = [...checked];
      let checkedFlag = updatedList.includes(elem) ? "checked" : "";
      console.log(checkedFlag);
      return (
        <Element
          key={`${elem} + "${index}"`}
          handleCheck={handleCheck}
          setList={setList}
          handleDelete={() => handleDelete(index)}
          checkedFlag={checkedFlag}
          handleSave={handleSave}
          index={index}
        >
          {elem}
        </Element>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.block__container}>{renderElements()}</div>
      <ModifyPanel
        checked={checked}
        handleMove={handleMoveItem}
        handleAdd={handleAdd}
      ></ModifyPanel>
    </div>
  );
};

export default Block;
