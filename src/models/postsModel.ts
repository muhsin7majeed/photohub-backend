import mongoose, { Schema, Document, Types } from "mongoose";

interface IPost extends Document {
  user: Types.ObjectId;
  medias: string[];
  location?: string;
  description?: string;
  tags?: string[];
  createdAt?: string;
}

const postsSchema = new Schema<IPost>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  medias: {
    type: [String],
    required: true,
  },
  location: String,
  description: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model<IPost>("Post", postsSchema);

export { Post };
