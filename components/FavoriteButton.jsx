import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

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
      <AiOutlinePlus size={17} className="transition duration-200" />
    </span>
  );
};

export default FavoriteButton;
