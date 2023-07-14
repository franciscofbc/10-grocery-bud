import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      addItem(name);
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
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" type="submit">
        add item
      </button>
    </form>
  );
};

export default Form;
