import React from "react";
import Title from "../Title";

const MyList = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-5  ">
        <Title title="My List" />
        <div className="container mx-auto px-4 py-5">
          <div className="grid lg:grid-cols-4 gap-2 md:grid-cols-2 grid-cols-1"></div>
        </div>
      </div>
    </>
  );
};

export default MyList;
