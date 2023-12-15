import axios from 'axios';

const baseUrl = 'http://localhost:3001/items';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (item) => {
  const response = await axios.put(`${baseUrl}/${item.id}`, item);
  return response.data;
};

export default { getAll, create, update };
