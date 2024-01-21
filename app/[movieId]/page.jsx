"use client";
import { movies } from "@/data/movies";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  let { id } = router.query ?? {};
  const singleMovie = movies.find((movie) => movie.id === id);

  return (
    <>
      {singleMovie ? (
        <div>
          <video className="w-full h-screen" src=""></video>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default page;
