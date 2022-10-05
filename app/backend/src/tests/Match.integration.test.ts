// import * as Sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');
// import { app } from '../app';
// import Match from '../database/models/MatchesModel';
// import Team from '../database/models/TeamsModel';
// chai.use(chaiHttp);
// const { expect, request } = chai;


// const matches = [
//   {
//     "id": 1,
//     "homeTeam": 16,
//     "homeTeamGoals": 1,
//     "awayTeam": 8,
//     "awayTeamGoals": 1,
//     "inProgress": false,
//   },
//   {
//     "id": 2,
//     "homeTeam": 16,
//     "homeTeamGoals": 2,
//     "awayTeam": 9,
//     "awayTeamGoals": 0,
//     "inProgress": true,
//   }
// ]

// const matchesWithTeams = [
//   {
//     matches,
//     "teamHome": {
//       "teamName": "São Paulo"
//     },
//     "teamAway": {
//       "teamName": "Grêmio"
//     }
//   },
//   {
//     matches,
//     "teamHome": {
//       "teamName": "São Paulo"
//     },
//     "teamAway": {
//       "teamName": "Internacional"
//     }
//   }
// ]

// describe('/matches', () => {
//   describe('GET findAll', () => {

//     before(() => {
//       Sinon.stub(Match, 'findAll').resolves(matchesWithTeams as Match & teamHome as Team)
//     });

//     after(() => {
//       Sinon.restore();
//     });

//     it('Deve retornar todos as partidas', async () => {
//       const response = await request(app).get('/matches');
//       expect(response).to.have.status(200);
//       expect(response).to.be.json;
//       expect(response.body).to.deep.equal(matchesWithTeams);
//       expect(response.body).to.be.an('array');
//     });
//   });
// });
