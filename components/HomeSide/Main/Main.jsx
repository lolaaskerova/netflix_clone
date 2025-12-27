"use client";
import React, { useState } from "react";
import Billboard from "../Billboard";
import Categories from "../Categories/Categories";

const Main = () => {
  const [id, setId] = useState("1084242");
  return (
    <>
      <Billboard id={id} />
      <Categories setId={setId} />
    </>
  );
};

export default Main;
