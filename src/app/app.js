import Koa from 'koa';
import router from './routes';
import config from '../config/config';
const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods());

var port = config.port || 3000;

app.listen(port, () => console.log('server started ' + port));

export default app

