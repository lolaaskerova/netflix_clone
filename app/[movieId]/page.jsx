"use client";
import fetchData from "@/hooks/fetchData";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  let { id } = router.query ?? {};

  const movies = fetchData(
    `https://api.themoviedb.org/3/movie/${id}?api_key=82976aa557a864bbd01c50abfe785ff8&append_to_response=videos`
  );

  return (
    <>
      {movies.videos ? (
        <div>
          <video
            className="w-full h-[70vh]"
            src={`https://www.youtube.com/embed/${movies.videos.results.id}`}
            autoPlay
            muted
          ></video>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default page;
