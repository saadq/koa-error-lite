# koa-error-lite
> A minimal error-handler middleware for Koa apps

This is the [recommended Koa error handler](https://github.com/koajs/koa/wiki/Error-Handling) published as an `npm` package. I always use this middleware in my Koa apps, so it made sense to make it reusable.

TypeScript declarations are included in the package.

## Requirements
This middleware is designed specifically for Koa v2, and so it requires Node v7.4+ (due to the usage of `async` functions).

## Installation

```bash
$ npm install koa-error-lite
```

## Usage

```js
const Koa = require('koa')
const errorHandler = require('koa-error-lite')

const app = new Koa()

// This middleware should be above any other middleware that you want to catch errors for.
app.use(errorHandler())

// Other middleware...
```

## License
MIT
