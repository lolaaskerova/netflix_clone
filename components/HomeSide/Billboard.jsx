import React from "react";
import { movies } from "@/data/movies";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Billboard = () => {
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <div className="cursor-pointer relative">
      <video
        className="h-[70vh] w-full object-cover brightness-[50%]"
        src={randomMovie.videoUrl}
        autoPlay
        muted
        loop
        poster={randomMovie.thumbnailUrl}
      ></video>
      <div className="absolute lg:top-[30%] top-[40%] left-5 py-5 ">
        <h1 className="lg:text-6xl text-4xl text-white">{randomMovie.title}</h1>
        <p className="text-white lg:max-w-2xl max-w-md lg:text-base md:text-sm text-mini">
          {randomMovie.description}
        </p>
        <button className="flex justify-center items-center gap-1 border-none text-white bg-zinc-700 bg-opacity-80 px-3 py-2 mt-3 rounded text-sm ">
          <AiOutlineInfoCircle /> More Info
        </button>
      </div>
    </div>
  );
};

export default Billboard;
