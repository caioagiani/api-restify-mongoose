import * as mongoose from "mongoose";
import * as bcryptjs from "bcryptjs";

interface IUser extends mongoose.Document {
  name?: string;
  email?: string;
  password?: string;
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function () {
  const user: IUser = this;

  user.password = await bcryptjs.hash(user.password, 1);
});

UserSchema.pre("updateOne", async function () {
  const pass = this.getUpdate().password;

  if (pass) this.getUpdate().password = bcryptjs.hashSync(pass, 1);
});

export default mongoose.model<IUser>("User", UserSchema);
