import { addToFav } from "@/redux/features/FavoriteSlice";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";

const FavoriteButton = ({ movie }) => {
  const [addFav, setAddFav] = useState(false);
  const dispatch = useDispatch();

  let Icon = addFav ? MdDone : AiOutlinePlus;

  return (
    <span
      onClick={() => {
        setAddFav(!addFav);
        dispatch(addToFav(movie));
      }}
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
      <Icon size={20} className="transition duration-200" />
    </span>
  );
};

export default FavoriteButton;
