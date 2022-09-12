import * as sinon from 'sinon';
import * as chai from 'chai';
import Teams from '../database/models/TeamsModels';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import ITeam from '../interfaces/ITeam';

//import { Response } from 'superagent';

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

  it('should return body', async () => {
    sinon.stub(Teams, "findAll").resolves([]);
    const response = await chai.request(app)
    .get('/teams')
    expect(response.body).to.be.deep.equal([]);
    sinon.restore();
});
});

const mockTeams = [
{id: 1, teamName: "Avaí/Kindermann"},
{id: 2, teamName: "Bahia"},
{id: 3,teamName: "Botafogo"},
]

describe('teams/:id', () => {
  it('should return status 200', async () => {
    sinon.stub(Teams, "findAll").resolves([]);
    const response = await chai.request(app)
    .get('/teams/1')
    expect(response.status).to.equal(200);

    sinon.restore();
});

  it('should return team id', async () => {
  const response = await chai.request(app)
  .get('/teams/:id')
  expect(response.status).to.equal(200);
  expect(response.body).to.be.equal(mockTeams[0]);

  sinon.restore();
});
});
