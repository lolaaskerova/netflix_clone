"use client";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import fetchData from "@/hooks/fetchData";

const Billboard = () => {
  const movies = fetchData(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=82976aa557a864bbd01c50abfe785ff8"
  );
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <>
      {randomMovie && (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${randomMovie.backdrop_path})`,
          }}
          className="cursor-pointer relative h-[90vh] bg-no-repeat bg-cover "
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-10">
            <div className="absolute lg:top-[30%] top-[40%] left-5 py-5 ">
              <h1 className="lg:text-6xl text-2xl text-white">
                {randomMovie.title}
              </h1>
              <p className="text-white lg:max-w-2xl max-w-md lg:text-base md:text-sm text-mini">
                {randomMovie.overview}
              </p>
              <div className="flex items-center gap-3">
                <button className="flex justify-center items-center gap-1 border-none text-white bg-zinc-500 bg-opacity-80 px-3 py-2 mt-3 rounded text-sm hover:bg-zinc-700 transition ">
                  <BsFillPlayFill size={18} /> Play
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Billboard;
