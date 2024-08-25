import React from "react";
import Input from "../components/Input";
import { Button } from "../components";

const ForgotPassword = () => {
  return (
    <section className="flex flex-col items-center justify-center font-Montserrat min-h-[calc(100vh-305px)] relative z-0 my-20">
      <div className="w-[672px] max-w-[90%] mx-auto">
        <div className="text-center mb-[40px]">
          <h2 className="capitalize text-primary text-[25px] lg:text-[32px] font-[600] lg:font-[700] leading-normal">
            Forgot Password
          </h2>
        </div>
        <form className="p-[24px] pt-0">
          <div className="mb-[40px]">
            <Input id="email" label="Email" type="email" isError={false} />
          </div>
          <Button label="Reset Password" variant="contained" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
