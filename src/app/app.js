import Koa from 'koa';
import _ from 'lodash';
import router from './../routes';
import config from '../config/config';
const app = new Koa();

_.forEach(router.routes().router.stack, function (route){
console.log(route.path);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

var port = config.port || 3000;

app.listen(port, () => console.log('server started ' + port));

export default app

