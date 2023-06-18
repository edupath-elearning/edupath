import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import admin from './admin/index';
import auth from './auth';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/', {}, async (request, reply) => {
    return reply.code(200).send({ message: 'hello' });
  });
  server.register(admin, { prefix: 'admin' });
  server.register(auth, { prefix: 'auth' });
};
