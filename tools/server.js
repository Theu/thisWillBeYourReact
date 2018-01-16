import Koa from 'koa';
import bodyparser from 'koa-bodyparser';

const app = new Koa();
app.use(bodyparser());


app.use(async ctx => {
    ctx.body = 'up and running'
})

app.listen(3000)
