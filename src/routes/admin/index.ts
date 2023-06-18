import { FastifyInstance } from 'fastify';
import maintype from './maintype';
import section from './section';
import course from './course';
import tag from './tag';
import detail from './detail';

export default async (server: FastifyInstance) => {
  server.register(maintype, { prefix: 'maintype' });
  server.register(section, { prefix: 'section' });
  server.register(course, { prefix: 'course' });
  server.register(tag, { prefix: 'tag' });
  server.register(detail, { prefix: 'detail' });
};
