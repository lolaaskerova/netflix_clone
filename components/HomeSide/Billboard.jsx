import React from "react";
import { movies } from "@/data/movies";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Billboard = () => {
  const router = useRouter();

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
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push(`${randomMovie?.id}`)}
            className="flex justify-center items-center gap-1 border-none text-white bg-zinc-500 bg-opacity-80 px-3 py-2 mt-3 rounded text-sm hover:bg-zinc-700 transition "
          >
            <BsFillPlayFill size={18} /> Play
          </button>
          <button className="flex justify-center items-center gap-1 border-none text-white bg-zinc-700 bg-opacity-80 px-3 py-2 mt-3 rounded text-sm hover:bg-zinc-600 transition ">
            <AiOutlineInfoCircle size={18} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
