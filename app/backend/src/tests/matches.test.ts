import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';;
import Matches from '../database/models/MatchesModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('matches', () => {
  it('should return status 200', async () => {
      sinon.stub(Matches, "findAll").resolves([]);

      const response = await chai.request(app)
      .get('/matches')
      
      expect(response.status).to.equal(200);

      sinon.restore();
  });

  it('should return matches', async () => {
    sinon.stub(Matches, "findAll").resolves([]);
    
    const response = await chai.request(app)
    .get('/matches')
    
    expect(response.body).to.be.deep.equal([]);
    sinon.restore();
  });


});

describe('matches', () => {
  it('update', async () => {
    sinon.stub(Matches, 'update').resolves([1, []]);
    
    const response = await chai.request(app)
    .patch('/matches/1')
    
    expect(response.body).to.be.deep.eq({message:'Token not found' });
    sinon.restore();
  });

  });

  