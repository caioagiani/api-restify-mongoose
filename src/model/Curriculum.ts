import { Types, Schema, model, Document } from "mongoose";
import { User } from "./User";

interface ICurriculum extends Document {
  name?: string;
  user?: Types.ObjectId | typeof User;
}

const CurriculumSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Curriculum = model<ICurriculum>("Curriculum", CurriculumSchema);
