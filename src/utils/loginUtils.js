import axios from "axios";
const loginHost = import.meta.env.VITE_LOGIN_HOST;

const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(`${loginHost}/login/${userId}`);
    const data = response.data;
    //console.log('data: ', data);
    if (data.length > 0) {
      return { data: data[0] };
    } else {
      return { data: null };
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const createAccount = async (userId, accountInfo, role) => {
  await axios.post(`${loginHost}/login/${userId}/${role}`, accountInfo)
  .then(() => {
    return true;
  })
  .catch((err) => {
    throw err;
  });
};

//check for session and userInfo in local storage
//if session and userInfo exist, return them
//else return null and the user will have to sign in again
const getSession = async () => {
  const session = JSON.parse(window.localStorage.getItem('session'))
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (session && userInfo) {
    return { data: { session, userInfo } };
  } else {
    return { data: null };
  }
}

export {
  getUserInfo,
  createAccount,
  getSession,
}