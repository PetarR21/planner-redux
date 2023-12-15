import { useSelector } from 'react-redux';

const Items = () => {
  const items = useSelector((state) => state.items);
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className={item.completed ? 'completedItem' : ''}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Items;
