import { useSelector, useDispatch } from 'react-redux';
import { toggleItem } from '../reducers/items';
import { setNotification } from '../reducers/notification';

const Items = () => {
  const items = useSelector((state) =>
    state.items.filter((item) =>
      item.title.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    )
  );
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(toggleItem(item));
    dispatch(setNotification(`You toggled '${item.title}'`, 4));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          onClick={() => handleClick(item)}
          key={item.id}
          className={'item ' + (item.completed ? 'completedItem' : '')}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Items;
