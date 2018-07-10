const app = new (require('koa'))();

app.use(async ctx => {
  ctx.body = {
    hello: 'world'
  }
});

const http = require('http');
http.createServer(app.callback()).listen(3000);