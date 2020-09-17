import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import actions from '../../../api/routes/actions';

chai.use(chaiHttp);

/*
- wystawic 1 REST endpoint, który przyjmuje POSTem:
  {userId: ..., gameId: ...., action: ...}
*/

/*
expect(response).to.have.status(201);

          expect(response.body).to.have.key('action');
          expect(response.body.action).to.have.key('id');
          expect(response.body.action).to.have.key('link');
*/

/*

{
  action: {
    id: 102,
    userId: 12,
    gameId: 22,
    action: "stop",
    _links: {
      self: {
        href: "http://localhost:5001/actions/${id}"
      },
      actions: {
        href: "http://localhost:5001/actions"
      }
    },
  }
}


*/
