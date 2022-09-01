import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('login/validate', () => {
    it('should return status 200', async () => {
      const response = await chai.request(app)
      .get('/login/validate')
      
      expect(response.status).to.equal(200);
  });
});
