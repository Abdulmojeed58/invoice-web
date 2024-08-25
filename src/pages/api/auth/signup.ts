import connectToMongoDB from "@/lib/monogodb";
import User from "@/models/user";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch((error) => res.json(error));

  if (req.method === "POST") {
    if (!req.body) return res.status(400).json({ error: "Data is missing" });

    const { firstName, lastName, email, phoneNumber, age, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ error: "User already exixts" });
    } else {
      if (password.length < 6) {
        return res
          .status(409)
          .json({ error: "Password should be 6 character long" });
      }
      const hashedPassword = await hash(password, 12);
      try {
        const user: IUser = await User.create({
          firstName,
          lastName,
          email,
          phoneNumber,
          age,
          password: hashedPassword,
        });

        const formattedUser = {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          age: user.age,
          _id: user._id,
        };

        return res.status(201).json({ success: true, user: formattedUser });
      } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          for (let field in error.errors) {
            const msg = error.errors[field].message;
            return res.status(409).json({ error: msg });
          }
        }
        return res.status(500).json({ error: "Could not create user" });
      }
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;
