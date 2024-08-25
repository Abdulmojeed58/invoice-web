import { Button, DialogBox } from "@/components";
import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

interface DeleteButtonTriggerProps {
  isOpen: boolean;
  children: React.ReactNode;
  handleCancel: () => void;
  handleDelete: () => void;
}

const DeleteButtonTrigger: React.FC<DeleteButtonTriggerProps> = ({
  isOpen,
  children,
  handleCancel,
  handleDelete,
}) => {
  return (
    <>
      {children}
      <DialogBox
        isOpen={isOpen}
        className="flex flex-col items-center justify-center gap-10"
      >
        <p>Are you sure you want to delete your Profile Photo?</p>
        <div className="flex">
          <Button label="Cancel" variant="outlined" onClick={handleCancel} />
          <Button
            label="Delete"
            variant="contained"
            customClassName="!bg-red-400"
            onClick={handleDelete}
          />
        </div>
      </DialogBox>
    </>
  );
};

export default DeleteButtonTrigger;
