import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filter';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className='filter'>
      filter:
      <input
        type='text'
        onChange={({ target }) => {
          dispatch(setFilter(target.value));
        }}
      />
    </div>
  );
};

export default Filter;
