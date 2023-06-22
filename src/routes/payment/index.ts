import { FastifyInstance } from 'fastify';
import { getCoursesSimilar } from '~controllers/payment';

export default async (server: FastifyInstance) => {
  server.get(
    '/courses_similar',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            course_id: { type: 'string' },
          },
          required: ['course_id'],
        },
      },
    },
    getCoursesSimilar,
  );
};
