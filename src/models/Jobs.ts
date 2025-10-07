import { Schema, model, Document } from "mongoose";


export interface IJob extends Document {
  id: string;
  title: string;
  description?: string;
  createdAt: String;
}

const jobSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  createdAt: { type: String, default: Date.now },
});

export const Job = model<IJob>("Job", jobSchema);
