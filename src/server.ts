import express from 'express';
import { Server } from 'http';
import config from './config';

const app: express.Application = express();

const PORT = config.PORT;

app.use(express.json());

const endpoints = {
  _links: {
    self: {
      href: '/',
      methods: ['GET'],
    },
    actions: {
      href: '/actions',
      methods: ['GET', 'POST'],
    },
  },
};

app.get('/', (request: express.Request, response: express.Response): void => {
  response.status(200).json(endpoints);
});

app.listen(PORT, (): void => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
