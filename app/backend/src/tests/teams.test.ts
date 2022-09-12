import * as sinon from 'sinon';
import * as chai from 'chai';
import Teams from '../database/models/TeamsModels';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('teams', () => {
    it('should return status 200', async () => {
      sinon.stub(Teams, "findAll").resolves([]);

      const response = await chai.request(app)
      .get('/teams')
      
      expect(response.status).to.equal(200);

      sinon.restore();
  });

    it('should return teams/:id', async () => {
    sinon.stub(Teams, "findOne").resolves();
    
    const response = await chai.request(app)
    .get('/teams/:id')
    
    expect(response.body).to.be.deep.equal([]);
});

});
