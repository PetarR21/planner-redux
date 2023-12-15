import { useDispatch } from 'react-redux';
import { createItem } from '../reducers/items';
import { setNotification } from '../reducers/notification';

const NewItem = () => {
  const dispatch = useDispatch();

  const addItem = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const object = {
      title,
      completed: false,
    };
    dispatch(createItem(object));
    event.target.title.value = '';
    dispatch(setNotification(`You created item '${title}'`, 4));
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
