import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const MovieCard = ({ data }) => {
  return (
    <div className="group lg:h-[12vw] md:h-[20vw] h-[40vw] cursor-pointer relative col-span lg:mb-0 md:mb-[35%] sm:mb-[25%] mb-[40%]">
      <img
        className="lg:h-[12vw] md:h-[20vw] h-[40vw] w-full object-cover transition lg:group-hover:opacity-0 opacity-0 lg:opacity-100 "
        src={data.thumbnailUrl}
        alt={data.title}
      />
      <div
        className="
        absolute
        top-0 
        lg:invisible
        lg:opacity-0  
        visible
        opacity-100
        z-10 
        transition 
        duration-200
        w-full
        lg:group-hover:opacity-100
        lg:group-hover:visible
        lg:group-hover:-translate-y-20
        "
      >
        <img
          className="
          object-cover 
          transition 
          duration 
          lg:h-[12vw] 
          md:h-[20vw] 
          h-[40vw]
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
            lg:p-2 
            p-1
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
            lg:p-2 
            p-1
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
