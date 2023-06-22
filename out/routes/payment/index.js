import { getCoursesSimilar } from '../../controllers/payment/index.js';

var payment = async (server) => {
    server.get('/courses_similar', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    course_id: { type: 'string' },
                },
                required: ['course_id'],
            },
        },
    }, getCoursesSimilar);
};

export { payment as default };
