import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFeed } from "../utils/feedSlice";
const Feed = () => {
  const dispatch = useDispatch();
  const feedData = async () => {
    try {
      const feedRes = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(feedRes?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    feedData();
  }, []);
  return <div>Feed</div>;
};

export default Feed;
