import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address",
    ],
  },
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minLength: [4, "First Name should be at least 4 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minLength: [4, "Last Name should be at least 4 characters long"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone Number is required"],
    match: [
      /^(?:(?:\+\d{1,4}[-.\s]?)?(?:\(\d{1,4}\)[-.\s]?)?|\d{1,4}[-.\s]?)?\d{1,14}$/,
      "Invalid phone number",
    ],
  },
  age: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false,
  },
  customers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
  ],
});

const User = models.User || model("User", UserSchema);

export default User;
