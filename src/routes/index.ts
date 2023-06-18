import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/', {}, async (request, reply) => {
    return reply.code(200).send({ message: 'hello' });
  });
};
