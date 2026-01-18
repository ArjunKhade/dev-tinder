import React, { useEffect } from "react";
import { FEED_URL } from "../constant/api.config";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";

import data from '../data/data.json'
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      // const data = await fetch(FEED_URL);
      // const json = await data.json();

      dispatch(addFeed(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return <div className="flex justify-center my-2">
    <UserCard user={ feed && feed[0]}/>
  </div>;
};

export default Feed;
