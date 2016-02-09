/**
 * Created by soriin on 2/8/2016.
 */
/**
 * Created by soriin on 2/8/2016.
 */
var router = require('koa-router')();

router.prefix('/ships');

router.get('/', function (ctx, next) {
  ctx.body = 'GET Ship List';
  next();
});
router.post('/:ship', function (ctx, next) {
  ctx.body = 'POST Ship';
  next();
});

export default router;