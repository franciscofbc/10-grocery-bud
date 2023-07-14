const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, name, completed } = item;

  return (
    <article className="item">
      <div>
        <input
          type="checkbox"
          id={name}
          checked={completed}
          onChange={() => {
            editItem(id);
          }}
        />
        <label
          htmlFor={name}
          style={{ textDecoration: completed && 'line-through' }}
        >
          {name}
        </label>
      </div>
      <button className="btn" type="button" onClick={() => removeItem(id)}>
        delete
      </button>
    </article>
  );
};

export default SingleItem;
