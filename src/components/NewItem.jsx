const NewItem = () => {
  const addItem = (event) => {
    event.preventDefault();
    console.log('add item');
  };

  return (
    <div>
      <h3>New Item</h3>
      <form onSubmit={addItem}>
        <div>
          <input type='text' name='title' /> <button type='submit'>save</button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
