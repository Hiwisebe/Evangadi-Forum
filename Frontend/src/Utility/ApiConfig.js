import axios from "axios";

// const axiosBaseURL = axios.create({
//   baseURL: "https://evangadi-forum-2-yels.onrender.com" + "/api",
// });
const axiosBaseURL = axios.create({
  baseURL: "http://localhost:5500/api",
});
export default axiosBaseURL;
// export const axiosImageURL = "https://evangadi-forum-2-yels.onrender.com";
export const axiosImageURL = "http://localhost:5500/api";
