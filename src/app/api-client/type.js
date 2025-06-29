const API_BASE_URL = 'http://localhost:3001/type/';

export const getTypePostId = async () => {
  try {
    const response = await fetch(API_BASE_URL + 'post', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await (true, response.json());
    return data[0].id;
  } catch (error) {
    return false, error;
  }
};
export const getType = async () => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await (true, response.json());
    return data;
  } catch (error) {
    return false, error;
  }
};
