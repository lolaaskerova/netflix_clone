import React from "react";

const MovieCard = ({ data, setId }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <div
      onClick={() => {
        setId(data.id), scrollToTop();
      }}
      className="group lg:h-[12vw] md:h-[20vw] h-[40vw] cursor-pointer relative col-span lg:mb-[90%] md:mb-[90%] mb-[90%]"
    >
      <img
        className="w-full h-[400px] object-cover aspect-auto transition lg:group-hover:opacity-0 opacity-0 lg:opacity-100"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.original_title}
      />
      <div
        className="
        absolute
        md:min-h-custom
        lg:min-h-big
        sm:min-h-mini
        top-0 
        bg-zinc-800
        rounded-md
        lg:invisible
        lg:opacity-0  
        visible
        opacity-100
        z-10 
        transition 
        duration-200
        lg:group-hover:opacity-100
        lg:group-hover:visible
        lg:group-hover:-translate-y-20
        "
      >
        <img
          className="
          aspect-square
          object-contain
          transition 
          duration 
          w-full
          rounded-t-md"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.original_title}
        />
        <div className="p-3">
          <div className="text-center">
            <h4 className="text-white lg:text-custom text-base">
              {data.title}
            </h4>
          </div>
          <div className="mt-3 flex flex-col justify-center items-center">
            <p className="text-zinc-400 text-sm">
              Release Date: {data.release_date}
            </p>
            <span className="text-zinc-500 text-mini">
              {" "}
              Language: {data.original_language}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
