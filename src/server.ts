import express from 'express';

const app: express.Application = express();

const PORT = 5001;

app.listen(PORT, (): void => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
