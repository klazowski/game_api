import express, { Request, Response } from 'express';
import IActionREST from '../../models/IActionREST';
import { getActions, getAction, addAction } from '../middleware/actions';
import { isJson } from '../middleware/isJson';
import { isNewActionValid } from '../middleware/isNewActionValid';

const router: express.Router = express.Router();
/*
  - wystawic 1 REST endpoint, który przyjmuje POSTem:
  {userId: ..., gameId: ...., action: ...}
*/

// @route GET api/actions
// @desc GET list of all actions. Added to verify that POST works correctly.
// @access Public
router.get(
  '/',
  async (request: Request, response: Response): Promise<void> => {
    response.status(200).json(await getActions());
  }
);

// @route POST api/actions
// @desc Add action to database. Returns added action or error message.
// @access Public
router.post(
  '/',
  async (request: Request, response: Response): Promise<void> => {
    if (!isJson(request)) {
      response.status(400).json({
        success: false,
        message: 'Request must provide new action in json form',
      });
      return;
    }

    const newAction = request.body;
    if (!isNewActionValid(newAction)) {
      response.status(400).json({
        success: false,
        message: 'New action must have proper format: { userId: ..., gameId: ..., action: ... }',
      });
      return;
    }

    const newId: ActionId = await addAction(newAction);
    const savedAction: IActionREST | null = await getAction(newId);

    if (savedAction === null) {
      response.status(500).json({
        success: false,
        message: 'Failed to save the new action.',
      });
      return;
    }

    response.status(201).json({
      success: true,
      action: savedAction,
    });
  }
);

export default router;
