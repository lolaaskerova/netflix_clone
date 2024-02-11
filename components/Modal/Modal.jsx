import React from "react";

const Modal = ({ movieId, setModal }) => {
  return (
    <div
      className="
    lg:w-[40vw] 
    lg:h-[30vw] 
    md:w-[60vw] 
    md:h-[40vw]
    sm:w-[70vw] 
    sm:h-[50vw]  
    w-[80vw] 
    h-[60vw] 
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
