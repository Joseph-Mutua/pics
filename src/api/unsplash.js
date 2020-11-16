import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID DYzdl-JNf8bfv0ZFpHkeHDiYBMUJS33M9Qq1EZW5tsU",
  },
});
