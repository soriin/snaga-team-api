/**
 * Created by soriin on 2/8/2016.
 */
var router = require('koa-router')();

router.param('user', function (id, ctx, next) {
  ctx.user = "User " + id;
  next();
});
router.param('ship', function (id, ctx, next) {
  ctx.user = "Ship " + id;
  next();
});
router.param('event', function (id, ctx, next) {
  ctx.user = "Event " + id;
  next();
});

export default router;