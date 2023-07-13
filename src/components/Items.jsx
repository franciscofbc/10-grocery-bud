import SingleItem from './SingleItem';

const Items = ({ items, removeItem, updateCompleted }) => {
  return (
    <section>
      {items.map((item, index) => (
        <SingleItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          updateCompleted={updateCompleted}
          index={index}
        />
      ))}
    </section>
  );
};

export default Items;
