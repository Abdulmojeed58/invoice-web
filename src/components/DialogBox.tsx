import React from "react";
import Modal from "./Modal";

interface DialogBoxProps {
  className?: string;
  isOpen: boolean;
  children: React.ReactNode;
}

const DialogBox = ({ className, isOpen, children }: DialogBoxProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className={`${className} w-full max-w-[342px] lg:max-w-[420px] mx-auto h-[460px] overflow-hidden overflow-y-auto p-4 rounded-lg bg-white`}
      >
        {children}
      </div>
    </Modal>
  );
};

export default DialogBox;
