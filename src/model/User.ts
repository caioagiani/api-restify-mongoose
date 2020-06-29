import { Types, Schema, Document, model } from "mongoose";
import { hashSync } from "bcryptjs";

import { Curriculum } from "./Curriculum";

interface IUser extends Document {
  name?: string;
  email?: string;
  password?: string;
  curriculum?: Types.ObjectId | typeof Curriculum;
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    curriculum: {
      type: Schema.Types.ObjectId,
      ref: "Curriculum",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function () {
  let user: IUser = this;

  user.password = hashSync(user.password, 1);
});

UserSchema.pre("updateOne", function () {
  let pass = this.getUpdate().password;

  if (pass) pass = hashSync(pass, 1);
});

export const User = model<IUser>("User", UserSchema);
