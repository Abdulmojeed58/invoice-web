import { Button, DialogBox, FilterIcon, Input } from "@/components";
import React, { useState } from "react";

const CustomerFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFIlter = () => {
    setIsOpen((value) => !value);
  };
  return (
    <>
      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            type="text"
            id="search"
            inputprops={{ placeholder: "Search by name, email, or others..." }}
          />
        </div>
        <button
          className="flex items-center gap-1 rounded-xl px-4 bg-grey-medium"
          onClick={handleFIlter}
        >
          <FilterIcon />
          <h3 className="text-greyPrimary">Filters</h3>
        </button>
      </div>
      <DialogBox isOpen={isOpen} className="flex flex-col gap-3">
        <p>Filter</p>
        <div>
          <Input
            type="text"
            id="location"
            label="Location"
            inputprops={{ placeholder: "Bariga, Lagos" }}
          />
        </div>
        <div className="flex justify-end">
          <Button label="Clear All" variant="outlined" onClick={handleFIlter} />
          <Button label="Filter" variant="contained" onClick={handleFIlter} />
        </div>
      </DialogBox>
    </>
  );
};

export default CustomerFilter;
