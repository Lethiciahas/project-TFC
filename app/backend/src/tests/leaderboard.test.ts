import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/MatchesModel';
import leaderService from '../services/leaderService';


chai.use(chaiHttp);

const { expect } = chai;

const mockTeam = {
  name: "Santos",
  totalPoints: 11,
  totalGames: 5,
  totalVictories: 3,
  totalDraws: 2,
  totalLosses: 0,
  goalsFavor: 12,
  goalsOwn: 6,
  goalsBalance: 6,
  efficiency: 73.33
  
}
describe('leaderboard/home', () => {
     it('should return leaderboard', async () => { 
      const response = await chai.request(app)
      .get('/leaderboard/home')
      
      expect(response.body).to.deep.equal([mockTeam]);
  });

  it('should return status', async () => { 
    const response = await chai.request(app)
    .get('/leaderboard/home')
    
    expect(response.status).to.equal(200);
});
});

describe('leaderboard/away', () => {
  it('should return leaderboard', async () => { 
   const response = await chai.request(app)
   .get('/leaderboard/away')
   
   expect(response.body).to.deep.equal([mockTeam]);
});
});
