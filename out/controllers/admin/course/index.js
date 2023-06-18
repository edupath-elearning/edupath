import { Course } from '../../../models/Course.js';

const add = async (request, reply) => {
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
const remove = async (request, reply) => {
    const _id = request.params._id;
    const result = await Course.findByIdAndRemove(_id);
    await reply.code(200).send(result);
};
const all = async (request, reply) => {
    const result = await Course.find();
    await reply.code(200).send(result);
};

export { add, all, remove };
