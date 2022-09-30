import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import UserModel from '../database/models/UsersModel';
chai.use(chaiHttp);
const { expect, request } = chai;

const userLogin = {
  email: 'teste@teste.com',
  password: 'senha123'
}


describe('/login', () => {
  describe('POST', () => {

    before(() => {
      Sinon.stub(UserModel, 'findOne').resolves(userLogin as UserModel)
    });

    after(() => {
      Sinon.restore();
    });

    it('Deve efetuar um login com sucesso e gerar um token', async () => {
      const response = await request(app).post('/login').send(userLogin);
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token');
    });
  });

});
