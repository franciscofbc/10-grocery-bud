import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Form from './components/Form';
import Items from './components/Items';

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')));

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    toast.success('item deleted');
  };

  const toggleItem = (id, completed) => {
    // console.log(items.find((item) => item.id === id));
    console.log(completed);
    const teste = items.find((item) => {
      if (item.id === id) {
        return { ...item, completed };
      }
    });

    console.log(teste);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <main>
      <ToastContainer position="top-center" />
      <section>
        <h1>grocery bud</h1>
        <Form items={items} setItems={setItems} />
        <Items
          items={items}
          setItems={setItems}
          removeItem={removeItem}
          toggleItem={toggleItem}
        />
      </section>
    </main>
  );
};

export default App;
