var routes = async (server, options) => {
    server.get('/', {}, async (request, reply) => {
        return reply.code(200).send({ message: 'hello' });
    });
};

export { routes as default };
