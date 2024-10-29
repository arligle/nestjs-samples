import express, { Request, Response } from 'express';

const app = express();
const port = 3002;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, http-server created with express.js');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
