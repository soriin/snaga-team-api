/**
 * Created by soriin on 2/8/2016.
 */
var router = require('koa-router')();

router.post('/users', function (ctx, next) {
  ctx.body = 'POST User';
  next();
});

export default router;