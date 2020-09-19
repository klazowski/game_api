import express, { Request, Response } from 'express';
import config from './config';
import endpoints from './services/endpoints';

const app: express.Application = express();

const PORT = config.PORT;

app.use(express.json());

app.get('/', (request: Request, response: Response): void => {
  response.status(200).json(endpoints);
});

app.listen(PORT, (): void => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
