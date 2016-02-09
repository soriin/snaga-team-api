/**
 * Created by soriin on 2/8/2016.
 */
var router = require('koa-router')();

router.prefix('/events');

router.get('/', function (ctx, next) {
  ctx.body = 'GET Event List';
  next();
});
router.get('/:event', function (ctx, next) {
  ctx.body = 'GET Event';
  next();
});
router.post('/', function (ctx, next) {
  ctx.body = 'POST Event';
  next();
});
router.put('/:event', function (ctx, next) {
  ctx.body = 'PUT Event';
  next();
});
router.delete('/:event', function (ctx, next) {
  ctx.body = 'DELETE Event';
  next();
});

export default router;