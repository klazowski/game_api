import express, { Request, Response } from 'express';
import { getActions } from '../middleware/actions';

const router: express.Router = express.Router();
/*
  - wystawic 1 REST endpoint, który przyjmuje POSTem:
  {userId: ..., gameId: ...., action: ...}
*/

// @route GET api/actions
// @desc GET list of all actions. Added to verify that POST works correctly.
// @access Public
router.get('/', (request: Request, response: Response): void => {
  response.status(200).json(getActions());
});

export default router;
