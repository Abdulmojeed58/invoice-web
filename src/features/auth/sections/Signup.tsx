import React, { useEffect, useState } from "react";
import Input, { CheckBox, StyledPhoneInput } from "../components/Input";
import { Button } from "../components";
import { PATHS } from "@/routes/path";
import { useAuth } from "@/zustance/authSlice";
import { useRouter } from "next/router";
import useMessage from "@/hooks/useMessage";
import useError from "@/hooks/useError";
import { Controller } from "react-hook-form";
import { useRegisterForm } from "../hooks";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age?: string | undefined;
  password: string;
}

const Signup = () => {
  // const [inputValue, setInputValue] = useState<string>();
  const router = useRouter();
  const { register, control, setValue, handleSubmit, errors } =
    useRegisterForm();

  const { register: signin, auth } = useAuth();
  const { error, loading, clearError, message, clearMessage } = auth;

  useMessage(message, clearMessage);

  // handle error
  useError(error, clearError);

  const onSubmit = async (data: UserData) => {
    try {
      // Register the user
      await signin(data);
      if (!error) {
        router.push("/dashboard");
        console.log(data);
      }
    } catch (error) {
      console.log("error", error);
    }

    console.log(data);
    console.log(errors);
  };

  return (
    <section className="flex flex-col items-center justify-center font-Montserrat min-h-full my-20 relative z-0">
      <div className="w-[672px] max-w-[90%] mx-auto">
        <div className="mb-[50px] lg:mb-[74px] text-center">
          <h2 className="capitalize text-primary text-[25px] lg:text-[32px] font-[700] leading-normal mb-[10px] lg:mb-[15px]">
            create an account
          </h2>
          <p className="text-secondary text-[15px] lg:text-[20px] font-[400] leading-normal">
            It&apos;s time for business
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[10px] border border-primary border-dashed p-[24px] pt-[48px]"
          noValidate
        >
          <div className="flex flex-col gap-[20px] lg:gap-[40px] border-b border-dashed border-primary pb-[30px] lg:pb-[56px]  mb-[20px] lg:mb-[32px]">
            <Input
              id="firstname"
              label="Firstname"
              type="text"
              isError={!!errors.firstName?.message}
              inputprops={{
                ...register("firstName"),
              }}
            />
            <Input
              id="lastname"
              label="Lastname"
              type="text"
              isError={!!errors.lastName?.message}
              inputprops={{
                ...register("lastName"),
              }}
            />
            <Input
              id="email"
              label="Email"
              type="email"
              isError={!!errors.email?.message}
              inputprops={{
                ...register("email"),
              }}
            />
            <Controller
              render={({ field }) => (
                <StyledPhoneInput
                  label="Phone Number"
                  id="phone-number"
                  isError={!!errors.phoneNumber?.message}
                  onChange={field.onChange} // Pass the field's onChange function
                  inputprops={{
                    value: field.value,
                    onChange: field.onChange, // Make sure to include onChange in inputProps
                    onBlur: field.onBlur,
                    // Any other input props
                  }}
                />
              )}
              defaultValue=""
              name="phoneNumber"
              control={control}
              rules={{ required: true }}
            />
            <Input
              id="age"
              label="Age"
              type="age"
              isError={!!errors.age?.message}
              inputprops={{
                ...register("age"),
              }}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              isError={!!errors.password?.message}
              inputprops={{
                ...register("password"),
              }}
            />
          </div>
          <Button
            label="Create an account"
            variant="contained"
            type="submit"
            loading={loading}
          />
        </form>
        <div className="mt-[48px] flex items-center justify-between">
          <CheckBox id="remember" label="Remember me" type="checkbox" />
        </div>
        <div className="mt-[40px] lg:mt-[80px] px-[7px]">
          <Button
            label="Login instead"
            variant="contained"
            type="button"
            onClick={() => router.push(PATHS.auth.login)}
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
