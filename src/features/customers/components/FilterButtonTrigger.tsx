import { Button, DialogBox } from "@/components";
import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

interface FilterButtonTriggerProps {
  isOpen: boolean;
  children: React.ReactNode;
  handleCancel: () => void;
  handleDelete: () => void;
}

const FilterButtonTrigger: React.FC<FilterButtonTriggerProps> = ({
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
        <div className="flex">
          <Button label="Clear All" variant="outlined" onClick={handleCancel} />
          <Button label="Filter" variant="contained" onClick={handleDelete} />
        </div>
      </DialogBox>
    </>
  );
};

export default FilterButtonTrigger;
