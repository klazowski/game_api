import express from 'express';
import config from './config';

const app: express.Application = express();

const PORT = config.PORT;

app.listen(PORT, (): void => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
