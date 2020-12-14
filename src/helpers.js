export const handleResponse = (response) => {
  return response.json().then((data) => {
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
