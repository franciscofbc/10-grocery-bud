import { useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const Form = ({ items, setItems }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name) {
      const item = { id: nanoid(), name, completed: false };
      const newItems = [...items, item];
      setItems(newItems);
      setName('');
      toast.success('item added to the list');
      return;
    }
    toast.error('please provide a value');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button className="btn" type="submit">
        add item
      </button>
    </form>
  );
};

export default Form;
