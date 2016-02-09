var router = require('koa-router')();
import userRoutes from './routing/userRoutes'
import shipRoutes from './routing/shipRoutes'
import eventRoutes from './routing/eventRoutes'

router.use('', userRoutes.routes(), userRoutes.allowedMethods());
router.use('', shipRoutes.routes(), shipRoutes.allowedMethods());
router.use('', eventRoutes.routes(), eventRoutes.allowedMethods());

export default router;