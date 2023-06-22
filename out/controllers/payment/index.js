import { Course } from '../../models/Course.js';
import { Detail } from '../../models/Detail.js';
import { Maintype } from '../../models/Maintype.js';
import { Section } from '../../models/Section.js';

const getCoursesSimilar = async (request, reply) => {
    const courseId = request.query.course_id;
    console.log(courseId);
    const course = await Course.findById(courseId);
    const detail = await Detail.findById(course?.detail_id, { _id: 1, tag_id: 1, section_id: 1 });
    const section = await Section.findById(detail?.section_id, { _id: 1, maintype_id: 1 });
    const maintype = await Maintype.findById(section?.maintype_id, { _id: 1 });
    const sections = await Section.find({ maintype_id: maintype._id }, { _id: 1 });
    const details = await Detail.find({ section_id: { $in: sections.map((x) => x._id) } }, { _id: 1 });
    const courses = await Course.find({ detail_id: { $in: details.map((x) => x._id) } }, { _id: 1 });
    await reply.code(200).send(courses.map((x) => ({
        _id: x._id,
    })));
};

export { getCoursesSimilar };
