// ~/server/index.ts
import express, { Request, Response } from 'express';
const router = express.Router();

router.post('/api/posttest', async (req: Request, res: Response) => {
  const params = req.params;
  const request = req.body;
  const hearderText = req.header('Host');
  res.send({
    title: 'post test',
    url: '/api/posttest',
    headers: hearderText,
    postBody: request,
    postParams: params,
    test: null,
  });
});
router.get('/api/gettest', async (req: Request, res: Response) => {
  const params = req.params;
  const request = req.body;
  const hearderText = req.header('Host');
  res.send({
    title: 'get test',
    url: '/api/gettest',
    headers: hearderText,
    postBody: request,
    postParams: params,
    test: null,
  });
});

/* // update
app.post("/api/update", async (req: Request, res: Response) => {
   // ...
});

// delete
app.post("/api/delete", async (req: Request, res: Response) => {
  // ...
});
*/
export default router;
