import { Document, Schema, model, models } from "mongoose";

export interface ITransaction extends Document {
  stripeId: string;
  amount: number;
  plan?: string;
  credits?: number;
  buyer?: { _id: string, firstName: string, lastName: string };
  createdAt?: Date;
  updatedAt?: Date;
}

const TransactionSchema = new Schema({
  stripeId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  plan: { type: String },
  credits: { type: Number },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;