"use client";
import React from "react";
import Title from "../Title";
import MovieCard from "../MovieCard";
import fetchData from "@/hooks/fetchData";

const Movies = (props) => {
  const { url, title, setId } = props;
  const movies = fetchData(url);

  return (
    <div className="container mx-auto px-4 py-5  ">
      <Title title={title} />
      <div className="container mx-auto px-4 py-5">
        <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-1">
          {movies.data &&
            movies.data.results.map((d) => (
              <MovieCard key={d.id} data={d} setId={setId} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
