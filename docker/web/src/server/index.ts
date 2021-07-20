import express from 'express';

import defaultRouter from './module';
import extendRouter from './extends';

const app = express();
app.use(express.json());

// 先に定義されたrouterの方が強いっぽい
app.use('/', extendRouter);
app.use('/', defaultRouter);

export default app;
