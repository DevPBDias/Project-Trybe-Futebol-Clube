import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import UserModel from '../database/models/UsersModel';
chai.use(chaiHttp);
const { expect, request } = chai;

const userLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin'
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
      console.log(response.body);
      
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

  describe('GET /validate', () => {

    const user = [
      {
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      },
      {
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', 
      },
    ]

    before(() => {
      Sinon.stub(UserModel, 'findOne').resolves(user[0] as UserModel)
    });

    after(() => {
      Sinon.restore();
    });

    it('Deve validar o token', async () => {
      const response = await request(app).get('/login/validate');
      console.log(response.body);
      
      expect(response).to.have.status(200);
      expect(response).to.be.json;
      expect(response.body).to.have.property('role');
      expect(response.body).to.deep.equal(user[0].role);
      expect(response.body).to.be.an('object');
    });
  });

});
