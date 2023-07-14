import SingleItem from './SingleItem';

const Items = ({ items, removeItem, editItem }) => {
  return (
    <section>
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </section>
  );
};

export default Items;
