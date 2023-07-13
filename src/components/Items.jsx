import SingleItem from './SingleItem';

const Items = ({ items, removeItem, toggleItem }) => {
  return (
    <section>
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          toggleItem={toggleItem}
        />
      ))}
    </section>
  );
};

export default Items;
