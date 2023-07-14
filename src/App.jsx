import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Items from './components/Items';

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const addItem = (nameItem) => {
    const item = { id: nanoid(), name: nameItem, completed: false };
    const newItems = [...items, item];
    setItems(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    toast.success('item deleted');
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <main>
      <ToastContainer position="top-center" />
      <section className="container">
        <h1 className="title">grocery bud</h1>
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </main>
  );
};

export default App;
