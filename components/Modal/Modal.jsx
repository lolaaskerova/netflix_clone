import React from "react";

const Modal = ({ movieId, setModal }) => {
  return (
    <div
      className="
    w-[40vw] 
    h-[30vw] 
    fixed 
    top-[60%] 
    left-[50%] 
    translate-x-[-50%] 
    translate-y-[-60%] 
    z-50 
"
    >
      <span
        onClick={() => setModal(false)}
        className="absolute top-[-7%] right-0 text-2xl cursor-pointer text-white hover:text-red-600"
      >
        {" "}
        ×
      </span>
      <iframe
        className="w-full h-full"
        allowFullScreen
        src={`https://www.youtube.com/embed/${movieId}`}
      >
        {" "}
      </iframe>
    </div>
  );
};

export default Modal;
