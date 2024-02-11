import React from "react";
import Movies from "../Movies";

const Categories = ({ setId }) => {
  return (
    <>
      <Movies
        setId={setId}
        title={"Popular"}
        url={
          "https://api.themoviedb.org/3/movie/popular?api_key=82976aa557a864bbd01c50abfe785ff8"
        }
      />
      <Movies
        setId={setId}
        title={"Upcoming"}
        url={
          "https://api.themoviedb.org/3/movie/upcoming?api_key=82976aa557a864bbd01c50abfe785ff8"
        }
      />
      <Movies
        setId={setId}
        title={"Top Rated Movies"}
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=82976aa557a864bbd01c50abfe785ff8"
        }
      />
    </>
  );
};

export default Categories;
