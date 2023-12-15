import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initalizeItems } from './reducers/items';
import Items from './components/Items';
import NewItem from './components/NewItem';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initalizeItems());
  }, []);

  return (
    <div>
      <h2>Planner</h2>
      <Notification />
      <Filter />
      <Items />
      <NewItem />
    </div>
  );
};

export default App;
