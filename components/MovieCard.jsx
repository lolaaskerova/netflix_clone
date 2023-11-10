import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const MovieCard = ({ data }) => {
  return (
    <div className="group h-[12vw] cursor-pointer relative">
      <img
        className="h-[12vw] w-full object-cover transition group-hover:opacity-0 sm:group-hover:opacity-0"
        src={data.thumbnailUrl}
        alt={data.title}
      />
      <div
        className="
        absolute
        top-0 
        invisible 
        opacity-0 
        sm:visible 
        z-10 
        transition 
        duration-200
        w-full
        group-hover:opacity-100  
        group-hover:-translate-y-20
        "
      >
        <img
          className="
          object-cover 
          transition 
          duration 
          h-[12vw] 
          w-full
          rounded-t-md"
          src={data.thumbnailUrl}
          alt={data.title}
        />
        <div
          className="
        bg-zinc-800
        rounded-b-md
        p-3
        "
        >
          <div className="flex items-center gap-3">
            <h4 className="text-white text-xl">{data.title}</h4>
            <span
              className="
            flex 
            justify-center 
            items-center 
            bg-white 
            p-2 
            cursor-pointer
            rounded-full 
            transition 
            hover:bg-zinc-300"
            >
              <BsFillPlayFill size={20} />
            </span>
            <span
              className="
            flex 
            justify-center 
            items-center 
            bg-white 
            p-2 
            cursor-pointer
            rounded-full 
            transition 
            hover:bg-zinc-300"
            >
              <AiOutlinePlus size={20} />
            </span>
          </div>
          <div className="mt-3">
            <p className="text-zinc-400 text-sm">{data.genre}</p>
            <span className="text-zinc-500 text-mini">{data.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
