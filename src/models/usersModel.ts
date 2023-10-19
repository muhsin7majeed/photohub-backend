import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  email?: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export { User };
