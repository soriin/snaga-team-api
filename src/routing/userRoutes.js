/**
 * Created by soriin on 2/8/2016.
 */
var router = require('koa-router')();

router.prefix('/users');

router.get('/', function (ctx, next) {
  ctx.body = 'GET User List';
  next();
});
router.get('/:user', function (ctx, next) {
  ctx.body = 'GET User';
  next();
});
router.put('/:user', function (ctx, next) {
  ctx.body = 'PUT User';
  next();
});
router.delete('/:user', function (ctx, next) {
  ctx.body = 'DELETE User';
  next();
});
router.put('/:user/groups', function (ctx, next) {
  ctx.body = 'PUT User groups';
  next();
});

export default router;