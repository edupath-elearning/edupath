import { model, Schema } from 'mongoose';
import SoftDeletableModel, { IMyDocument, softDeletePlugin } from './utils';

export type IChapter = {
  course_id: Schema.Types.ObjectId;
  chapter_name: string;
} & IMyDocument;

const chapterSchema = new Schema<IChapter>(
  {
    course_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    chapter_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

chapterSchema.plugin(softDeletePlugin, { deletedAtFieldName: 'deletedAt', overrideMethods: true });

export const Chapter = model<IChapter, SoftDeletableModel<IChapter>>('chapter', chapterSchema);
