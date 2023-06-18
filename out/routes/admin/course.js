import { add, all, remove } from '../../controllers/admin/course/index.js';
import { ELevel, ELanguage, EApprovalsStatus, ECourseStatus } from '../../types/course.js';

var course = async (server) => {
    server.post('/add', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    author_id: {
                        type: 'string',
                    },
                    detail_id: {
                        type: 'string',
                    },
                    course_level: {
                        type: "number",
                        enum: [Object.values(ELevel)]
                    },
                    course_language: {
                        type: "number",
                        enum: [Object.values(ELanguage)]
                    },
                    course_name: {
                        type: 'string',
                    },
                    approval_status: {
                        type: "number",
                        enum: [Object.values(EApprovalsStatus)]
                    },
                    course_fee: {
                        type: 'number',
                    },
                    description: {
                        type: 'string',
                    },
                    course_status: {
                        type: "number",
                        enum: [Object.values(ECourseStatus)]
                    },
                },
                required: ['course_name', 'maintype_id'],
            },
        },
    }, add);
    server.get('/all', all);
    server.delete('/remove/:_id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                },
                required: ['_id'],
            },
        },
    }, remove);
};

export { course as default };
