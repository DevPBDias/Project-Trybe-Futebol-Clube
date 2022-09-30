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

const emptyLogin = {
  email: null,
  password: null
}

const invalidLogin = {
  email: 'teste',
  password: '123'
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
      expect(response).to.have.status(200);
      expect(response).to.be.json;
      expect(response.body).to.have.property('token');
    });

    it('Não deve efetuar um login', async () => {
      const response = await request(app).post('/login').send(emptyLogin);
      expect(response).to.have.status(400);
      expect(response).to.be.json;
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.equal('All fields must be filled');
    });

    it('Login invalido', async () => {
      const response = await request(app).post('/login').send(invalidLogin);
      expect(response).to.have.status(401);
      expect(response).to.be.json;
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.equal('Incorrect email or password');
    });
  });

});
