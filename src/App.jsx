import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Form from './components/Form';
import Items from './components/Items';

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    toast.success('item deleted');
  };

  const updateCompleted = (index, newIsCompleted) => {
    items[index] = { ...items[index], completed: newIsCompleted };
    localStorage.setItem('items', JSON.stringify(items));
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <main>
      <ToastContainer position="top-center" />
      <section className="container">
        <h1 className="title">grocery bud</h1>
        <Form items={items} setItems={setItems} />
        <Items
          items={items}
          removeItem={removeItem}
          updateCompleted={updateCompleted}
        />
      </section>
    </main>
  );
};

export default App;
