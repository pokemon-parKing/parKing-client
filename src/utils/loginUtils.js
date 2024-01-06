import axios from "axios";
const loginHost = import.meta.env.VITE_LOGIN_HOST;

const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(`${loginHost}/login/${userId}`);
    const data = response.data;
    if (data.length > 0) {
      return { data: data[0] };
    } else {
      return { data: null };
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const createAccount = async (userId, accountInfo, role) => {
  await axios
    .post(`${loginHost}/login/${userId}/${role}`, accountInfo)
    .then(() => {
      return true;
    })
    .catch((err) => {
      throw err;
    });
};

const getSession = async () => {
  const session = JSON.parse(window.localStorage.getItem("session"));
  const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
  const vehicles = JSON.parse(window.localStorage.getItem("vehicles"));
  const garages = JSON.parse(window.localStorage.getItem("garages"));
  if (vehicles) {
    return { data: { session, userInfo, vehicles } };
  } else if (garages) {
    return { data: { session, userInfo, garages } };
  } else if (session && userInfo) {
    return { data: { session, userInfo } };
  } else {
    return { data: null };
  }
};

export { getUserInfo, createAccount, getSession };
