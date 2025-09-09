import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const { data } = await axios.get(ENDPOINT);
  return data;
}

export async function createUser(newUser: any) {
  const { data } = await axios.post(ENDPOINT, newUser);
  return data;
}
