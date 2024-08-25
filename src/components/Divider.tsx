import React from "react";

const Divider = ({ className = "" }: { className?: string }) => {
  return <div className={`border border-grey-normal w-full ${className}`} />;
};

export default Divider;
