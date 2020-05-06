import axios from 'axios';

const KEY_KEY = '14909867-6a36d78d4fd06c8c8edd1f81f';
const QANTITY_PER_PAGE = 12;

export const responceApi = async (query, pageNumber) => {
  const responce = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${KEY_KEY}&image_type=photo&orientation=horizontal&per_page=${QANTITY_PER_PAGE}`,
  );

  return responce;
};
