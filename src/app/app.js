import Koa from 'koa';
import _ from 'lodash';
import mongoose from 'mongoose';
import router from '../routes';
import unsecuredRoutes from '../unsecuredRoutes'
import config from '../config/config';
const app = new Koa();

if (!config.mongoConnectionString) {
  console.error("No MongoDB connection string found!");
} else {
  mongoose.connect(config.mongoConnectionString);
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  loadRoutes();
  startServer(config.port || 3000);
});

function loadRoutes() {
  // logger
  app.use(async (ctx, next) => {
    var start = new Date;
    await next();
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
  });

  app
    .use(unsecuredRoutes.routes())
    .use(unsecuredRoutes.allowedMethods());

  // Secure these routes.

  app
    .use(router.routes())
    .use(router.allowedMethods());
}

function startServer(port) {
  app.listen(port, () => console.log('server started ' + port));
}
export default app

