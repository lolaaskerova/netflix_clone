import React from "react";

const UserMenu = ({ showUser }) => {
  return (
    <div
      className={`bg-black bg-opacity-50 absolute top-14 right-1 px-2 py-4 w-40 border-2 transition border-zinc-400 text-center rounded-md ${
        showUser ? "block" : "hidden"
      }`}
    >
      <h6 className="text-white text-base mb-2 border-b-2 border-zinc-500 pb-3">
        Your Username
      </h6>
      <span className="text-zinc-400 text-sm cursor-pointer">Sign Out</span>
    </div>
  );
};

export default UserMenu;
