import { model, Schema } from 'mongoose';
import SoftDeletableModel, { IMyDocument, softDeletePlugin } from './utils';

export type IPath = {
  user_id: Schema.Types.ObjectId;
  is_completed: boolean;
  is_important: boolean;
} & IMyDocument;

const pathSchema = new Schema<IPath>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    is_completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_important: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

pathSchema.plugin(softDeletePlugin, { deletedAtFieldName: 'deletedAt', overrideMethods: true });

export const Path = model<IPath, SoftDeletableModel<IPath>>('path', pathSchema);
