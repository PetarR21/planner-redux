import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initalizeItems } from './reducers/items';
import Items from './components/Items';
import NewItem from './components/NewItem';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initalizeItems());
  }, []);

  return (
    <div>
      <h2>Planner</h2>
      <Items />
      <NewItem />
    </div>
  );
};

export default App;
