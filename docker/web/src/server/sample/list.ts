import { ServerMiddleware } from '@nuxt/types';

const myServerMiddleware: ServerMiddleware = function (req, res, next) {
  const header = req.headers.toString();
  res.end({
    test: 'hoge!!!',
    resheader: header
  });
};

export default myServerMiddleware;