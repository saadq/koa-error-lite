import * as Koa from 'koa'

declare function errorHandler(): Koa.Middleware

declare namespace errorHandler {}

export = errorHandler
