import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-2 m-2 shadow-lg w-40">
      <ul className="">
        <li>
          {" "}
          <Link to={"/"}>Home </Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className="pt-4">
        <h1 className="font-bold">You </h1>
        <li>History</li>
        <li>Playlist</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <ul className="pt-4">
        <h1 className="font-bold">Explore</h1>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <ul className="pt-4">
        <li>Setting</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
