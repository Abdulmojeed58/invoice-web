import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age?: string;
  password: string;
};

const useRegisterForm = () => {
  const registerSchema = yup
    .object({
      firstName: yup.string().required("Firstname is required"),
      lastName: yup.string().required("Lastname is required"),
      email: yup
        .string()
        .required("Email is required")
        .matches(
          // Regular expression for email validation
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          "Invalid email address"
        ),
      phoneNumber: yup.string().required("Please enter your phone number"),
      age: yup.string().matches(
        // Regular expression for email validation
        /^(?:(?:\+\d{1,4}[-.\s]?)?(?:\(\d{1,4}\)[-.\s]?)?|\d{1,4}[-.\s]?)?\d{1,14}$/,
        "Invalid phone number"
      ),
      password: yup.string().required("Password is Required"),
    })
    .required("Email and Password are required");

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
  };

  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
    defaultValues,
  });

  return { register, control, setValue, handleSubmit, errors };
};

export default useRegisterForm;
