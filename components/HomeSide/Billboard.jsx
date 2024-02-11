"use client";
import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import fetchData from "@/hooks/fetchData";
import Modal from "../Modal/Modal";

const Billboard = ({ id }) => {
  const [modal, setModal] = useState(false);
  const movie = fetchData(
    `https://api.themoviedb.org/3/movie/${id}?api_key=82976aa557a864bbd01c50abfe785ff8&append_to_response=videos`
  );

  return (
    <>
      {movie.data && (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.data.backdrop_path})`,
          }}
          className="cursor-pointer relative lg:h-[40vw] md:h-[50vw] h-[80vw] bg-no-repeat bg-cover bg-center flex items-center"
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-10">
            <div className=" absolute lg:top-[30%] top-[30%] left-5 py-5 ">
              <h1 className="lg:text-6xl text-2xl text-white mb-2">
                {movie.data.original_title}
              </h1>
              <p className="text-white lg:text-base md:text-sm text-mini">
                {movie.data.overview}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setModal(true)}
                  className="flex justify-center items-center gap-1 border-none text-white bg-zinc-500 bg-opacity-80 px-3 py-2 mt-3 rounded text-sm hover:bg-zinc-700 transition "
                >
                  <BsFillPlayFill size={18} /> Play
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal && (
        <Modal
          movieId={movie.data.videos.results[0]?.key}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default Billboard;
