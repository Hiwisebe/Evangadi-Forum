import axios from "axios";
// deploy endpoint reference
const axiosBaseURL = axios.create({
  baseURL: "https://evangadi-forum-tjn0.onrender.com" + "/api",
});
// Local endpoint reference
// const axiosBaseURL = axios.create({
//   baseURL: "http://localhost:5500/api",
// });
export default axiosBaseURL;
// deploy endpoint reference
export const axiosImageURL = "https://evangadi-forum-tjn0.onrender.com";
// Local endpoint reference
// export const axiosImageURL = "http://localhost:5500/api";
