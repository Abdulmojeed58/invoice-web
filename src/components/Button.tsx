import React from "react";

interface buttonProps {
  label: string | React.ReactNode;
  variant: "outlined" | "contained" | "text";
  disable?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  onClick?: VoidFunction;
  ref?: any;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  fullWidth?: boolean;
  customClassName?: string;
}

const Button: React.FC<buttonProps> = ({
  disable,
  onClick,
  variant,
  loading,
  label,
  type,
  buttonProps,
  ref,
  fullWidth,
  customClassName = "",
}) => {
  return (
    <button
      type={type || "submit"}
      ref={ref}
      onClick={onClick}
      disabled={disable || loading}
      {...buttonProps}
      className={`rounded-[10px] ${
        variant === "contained" ? "bg-darkGreen" : "bg-transparent"
      } flex items-center justify-center gap-[16px] py-[13px] px-4 ${
        fullWidth ? "w-full" : ""
      } ${customClassName}`}
    >
      <span className="font-Montserrat text-[15px] lg:text-[20px] font-[600] leading-normal text-secondary">
        {!loading && (
          <span
            className={`${
              variant === "contained" ? "text-white" : "text-darkGreen"
            } text-sm font-bold`}
          >
            {label}
          </span>
        )}
        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
      </span>
    </button>
  );
};

export default Button;
