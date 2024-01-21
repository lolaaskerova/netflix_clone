"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title";
import MovieCard from "../MovieCard";
import axios from "axios";
import { url } from "@/url/url";

const Movies = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(url).then((res) => res.data.results);
    setData(response);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-5  ">
      <Title title="Trending Now" />
      <div className="container mx-auto px-4 py-5">
        <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-1">
          {data && data.map((d) => <MovieCard key={d.id} data={d} />)}
        </div>
      </div>
    </div>
  );
};

export default Movies;
