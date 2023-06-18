import { FastifyReply, FastifyRequest } from 'fastify';
import { Course } from '~models/Course';
import { EApprovalsStatus, ECourseStatus, ELanguage, ELevel } from '~types/course';

export const add = async (
  request: FastifyRequest<{
    Body: {
      author_id: string;
      detail_id: string;
      course_level: ELevel;
      course_language: ELanguage;
      course_name: string;
      approval_status: EApprovalsStatus;
      course_fee: number;
      description: string;
      course_status: ECourseStatus;
    };
  }>,
  reply: FastifyReply,
) => {
  const author_id = request.body.author_id;
  const detail_id = request.body.detail_id;
  const course_level = request.body.course_level;
  const course_language = request.body.course_language;
  const course_name = request.body.course_name;
  const approval_status = request.body.approval_status;
  const course_fee = request.body.course_fee;
  const description = request.body.description;
  const course_status = request.body.course_status;

  const newCourse = new Course({
    author_id,
    detail_id,
    course_level,
    course_language,
    course_name,
    approval_status,
    course_fee,
    description,
    course_status,
  });
  const result = await newCourse.save();
  await reply.code(200).send(result);
};

export const remove = async (request: FastifyRequest<{ Params: { _id: string } }>, reply: FastifyReply) => {
  const _id = request.params._id;
  const result = await Course.findByIdAndRemove(_id);
  await reply.code(200).send(result);
};

export const all = async (request: FastifyRequest, reply: FastifyReply) => {
  const result = await Course.find();
  await reply.code(200).send(result);
};
