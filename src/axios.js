import axios from "axios";

const instance = axios.create({
  baseURL: "https://reel-rush.onrender.com/",
});

export default instance;
