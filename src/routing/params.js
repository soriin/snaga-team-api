/**
 * Created by soriin on 2/8/2016.
 */
var router = require('koa-router')();
import User from '../app/models/user'

router.param('user', function (id, ctx, next) {
  if (id) {
    User.findById(id, function(err, user){
      if (err) {
        console.error("Failed to fetch user with id: " + id);
      } else {
        ctx.user = user;
      }
    });
  }
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