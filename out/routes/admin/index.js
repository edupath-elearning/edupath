import maintype from './maintype.js';
import section from './section.js';
import course from './course.js';
import tag from './tag.js';
import detail from './detail.js';

var admin = async (server) => {
    server.register(maintype, { prefix: 'maintype' });
    server.register(section, { prefix: 'section' });
    server.register(course, { prefix: 'course' });
    server.register(tag, { prefix: 'tag' });
    server.register(detail, { prefix: 'detail' });
};

export { admin as default };
