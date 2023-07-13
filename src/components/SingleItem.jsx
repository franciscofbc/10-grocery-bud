import { useState } from 'react';

const SingleItem = ({ item, removeItem, updateCompleted, index }) => {
  const { id, name, completed } = item;
  const [isChecked, setIsChecked] = useState(completed);

  const toggle = (event) => {
    const newIsChecked = event.target.checked;
    setIsChecked(newIsChecked);
    updateCompleted(index, newIsChecked);
  };

  return (
    <article>
      <input
        type="checkbox"
        name=""
        id={name}
        checked={isChecked}
        onChange={toggle}
      />
      <label
        htmlFor={name}
        style={{ textDecoration: isChecked && 'line-through' }}
      >
        {name}
      </label>
      <button type="button" onClick={() => removeItem(id)}>
        delete
      </button>
    </article>
  );
};

export default SingleItem;
