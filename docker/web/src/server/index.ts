// ~/server/index.ts
import express from "express";
import { Request, Response } from "express";


const app = express();
app.use ( express.json() );


app.post('/api/posttest', async (req: Request, res: Response) => {
  const params = req.params;
  const request = req.body;
  const hearderText = req.header('Host');
  res.send({
    hoge: 'hfogehoge!',
    headers: hearderText,
    postBody: request,
    postParams: params,
    test: null
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
export default app;