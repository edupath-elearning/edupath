import { Schema, model } from 'mongoose';
import { IMyDocument, softDeletePlugin } from './utils';

export type IToken = {
  data: string;
  user: Schema.Types.ObjectId;
} & IMyDocument;

const tokenSchema = new Schema<IToken>(
  {
    data: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);

tokenSchema.plugin(softDeletePlugin, { deletedAtFieldName: 'deletedAt', overrideMethods: true });

export const Token = model<IToken>('token', tokenSchema);
