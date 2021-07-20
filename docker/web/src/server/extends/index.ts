import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/api/extends/gettest', async (req: Request, res: Response) => {
  const params = req.params;
  const request = req.body;
  const hearderText = req.header('Host');
  res.send({
    title: 'get test',
    url: '/api/extends/gettest',
    headers: hearderText,
    postBody: request,
    postParams: params,
    test: null,
  });
});

// 上書き定義できる？
router.get('/api/gettest', async (req: Request, res: Response) => {
  const params = req.params;
  const request = req.body;
  const hearderText = req.header('Host');
  res.send({
    title: 'overwridden!!!!!',
    url: '/api/gettest overwridden!!',
    headers: hearderText,
    postBody: request,
    postParams: params,
    test: null,
  });
});
export default router;
