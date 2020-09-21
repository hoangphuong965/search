import axios from "axios";
const API_KEY = "AIzaSyB84GSrRjQZi6654f2CqQw_kLZTLRvqEDk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: API_KEY,
  },
});
