import { signIn } from "next-auth/react";

interface ILoginUser {
  email: string;
  password: string;
}

const loginUser = async ({ email, password }: ILoginUser) => {
  const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  return res;
};

export default loginUser;
