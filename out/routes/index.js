import admin from './admin/index.js';
import auth from './auth/index.js';
import recommend from './recommend/index.js';

var routes = async (server, options) => {
    server.get('/', {}, async (request, reply) => {
        return reply.code(200).send({ message: 'hello' });
    });
    server.register(admin, { prefix: 'admin' });
    server.register(auth, { prefix: 'auth' });
    server.register(recommend, { prefix: 'recommend' });
};

export { routes as default };
