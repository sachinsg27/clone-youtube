import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Cricket" />
      <Button name="Comedy" />
      <Button name="Music" />
      <Button name="Movies" />
      <Button name="AI" />
      <Button name="Podcasts" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Drama" />
      <Button name="News" />
      <Button name="Events" />
      <Button name="Watched" />
    </div>
  );
};

export default ButtonList;
