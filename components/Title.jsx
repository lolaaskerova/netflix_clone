import React from "react";

const Title = (props) => {
  const { title } = props;
  return (
    <div>
      <h2 className="text-2xl text-white">{title}</h2>
    </div>
  );
};

export default Title;
