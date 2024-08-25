import React, { useEffect } from "react";
import Input from "../components/Input";
import { Button } from "../components";
import { useAuth } from "@/zustance/authSlice";
import { useRouter } from "next/router";
import { PATHS } from "@/routes/path";
import useMessage from "@/hooks/useMessage";
import useError from "@/hooks/useError";
import Link from "next/link";
import { useOtpForm } from "../hooks";

const Otp = () => {
  const { auth, otp } = useAuth();
  const {
    isRegister,
    currentEmail,
    isOtpSuccess,
    loading,
    message,
    clearMessage,
    error,
    clearError,
  } = auth;
  const router = useRouter();
  const { register, setValue, handleSubmit, errors } = useOtpForm();

  useMessage(message, clearMessage);

  // handle error
  useError(error, clearError);

  useEffect(() => {
    if (!isRegister) {
      router.push(PATHS.auth.register);
    }
  }, []);

  useEffect(() => {
    if (isOtpSuccess) {
      router.push(PATHS.auth.login);
    }
  }, [isOtpSuccess]);

  const onSubmit = async (data: any) => {
    console.log(data);
    const otpData = `${data.digit1}${data.digit2}${data.digit3}${data.digit4}`;
    try {
      await otp(otpData);
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <section className="flex flex-col items-center justify-center font-Montserrat min-h-[calc(100vh-305px)] relative z-0 my-20">
      <div className="w-[672px] max-w-[90%] mx-auto px-[24px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-[24px] lg:gap-[41px]"
        >
          <h2 className="capitalize text-primary text-[25px] lg:text-[32px] font-[600] lg:font-[700] leading-normal">
            OTP
          </h2>
          <p className="text-secondary text-[15px] lg:text-[20px] font-[400] leading-normal">
            We sent a code to {currentEmail || ""}
          </p>
          <div className="flex gap-[30px] lg:gap-[52px]">
            <Input
              id=""
              type="text"
              isError={false}
              inputClassName="leading-[37.24px] font-[600] px-0 text-center"
              inputprops={{
                ...register("digit1"),
                maxLength: 1,
              }}
            />
            <Input
              id=""
              type="text"
              isError={false}
              inputprops={{
                ...register("digit2"),
                maxLength: 1,
              }}
              inputClassName="leading-[37.24px] font-[600] px-0 text-center"
            />
            <Input
              id=""
              type="text"
              isError={false}
              inputprops={{
                ...register("digit3"),
                maxLength: 3,
              }}
              inputClassName="leading-[37.24px] font-[600] px-0 text-center"
            />
            <Input
              id=""
              type="text"
              isError={false}
              inputprops={{
                ...register("digit4"),
                maxLength: 4,
              }}
              inputClassName="leading-[37.24px] font-[600] px-0 text-center"
            />
          </div>
          <Button
            label="Continue"
            variant="contained"
            type="submit"
            loading={loading}
          />
          <p className="text-[15px] lg:text-[20px] font-[400] leading-normal text-[#919191]">
            Didn&apos;t receive the email?{" "}
            <button className="text-primary">Click to resend</button>
          </p>
          <Link
            href={PATHS.auth.register}
            className="flex items-center gap-[12px]"
          >
            <BackArrowIcon />
            <span className="text-[15px] lg:text-[20px] font-[400] leading-normal text-[#919191]">
              Back to Login
            </span>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Otp;

const BackArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_3_906)">
        <path
          d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
          fill="#919191"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_906">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
