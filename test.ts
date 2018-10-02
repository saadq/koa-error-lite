import * as Koa from 'koa'
import * as errorHandler from '.'

const app = new Koa()

app.use(errorHandler())
