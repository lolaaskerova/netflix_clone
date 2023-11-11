import React from "react";
import Title from "../Title";
import { useSelector } from "react-redux";
import MyListCard from "../MyListCard";

const MyList = ({ setAddFav }) => {
  const favorites = useSelector((state) => state.favorite);
  console.log(favorites.favorite);
  return (
    <>
      {favorites.favorite.length === 0 ? (
        <></>
      ) : (
        <div className="container mx-auto px-4 py-5  ">
          <Title title="My List" />
          <div className="container mx-auto px-4 py-5">
            <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-1">
              {favorites.favorite &&
                favorites.favorite.map((d) => (
                  <MyListCard key={d.id} data={d} setAddFav={setAddFav} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyList;
