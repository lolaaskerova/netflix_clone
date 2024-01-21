import React from "react";

const FavoriteButton = () => {
  return (
    <span
      className="
  flex 
  justify-center 
  items-center 
  bg-transparent
  border-2
  border-white
  lg:p-2
  p-1
  text-white
  cursor-pointer
  rounded-full 
  transition "
    >
      <Icon size={17} className="transition duration-200" />
    </span>
  );
};

export default FavoriteButton;
