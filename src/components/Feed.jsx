import axios from "axios";
import UserCard from "./UserCard";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feedInfo = useSelector((store) => store.feed);
  const feedData = async () => {
    if (feedInfo) {
      return;
    }
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
  if (feedInfo.length <= 0)
    return <h1 className="flex justify-center my-10">No new users found!</h1>;
  return (
    feedInfo && (
      <div className="flex justify-center my-10">
        <UserCard user={feedInfo[0]} />
      </div>
    )
  );
};

export default Feed;
