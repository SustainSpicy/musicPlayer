import React from "react";

const Modal = ({ children }) => {
  return (
    <div
      id="modal"
      tabIndex="-1"
      aria-hidden="true"
      className="flex flex-col gap-6 bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden absolute top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full"
    >
      {children}
    </div>
  );
};

export default Modal;
