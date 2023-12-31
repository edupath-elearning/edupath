import { FastifyInstance } from 'fastify';
import maintype from './maintype';
import section from './section';
import course from './course';
import tag from './tag';
import detail from './detail';
import chapter from './chapter';
import lesson from './lesson';

export default async (server: FastifyInstance) => {
  server.register(maintype, { prefix: 'maintype' });
  server.register(section, { prefix: 'section' });
  server.register(course, { prefix: 'course' });
  server.register(tag, { prefix: 'tag' });
  server.register(detail, { prefix: 'detail' });
  server.register(chapter, { prefix: 'chapter' });
  server.register(lesson, { prefix: 'lesson' });
};
