import { getVideo } from '../../controllers/learning/index.js';
import { verifyAccessToken } from '../../middlewares/auth/index.js';

var learning = async (server) => {
    server.addHook('preHandler', verifyAccessToken);
    server.get('/video/:lesson_id', { schema: { params: { type: 'object', properties: { lesson_id: { type: 'string' } }, required: ['lesson_id'] } } }, getVideo);
};

export { learning as default };
