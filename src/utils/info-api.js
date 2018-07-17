import axios from 'axios';

// const BASE_URL = 'http://localhost:8080';
const BASE_URL = 'https://reqres.in';

function getPublicInfo() {
  const url = `${BASE_URL}/api/users`;
  return axios.get(url).then(response => response.data);
}

function getPrivateInfo() {
  const url = `${BASE_URL}/api/users`;
  return axios.get(url).then(response => response.data);
}

export { getPublicInfo, getPrivateInfo };
