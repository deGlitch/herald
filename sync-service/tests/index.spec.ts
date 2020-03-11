import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src';
import sinon from 'sinon';
import { RabbitMQ, Redis } from '../src/integrations'

chai.use(chaiHttp);
chai.should();

interface Response {
    message: String | object,
    error?: Error
}

const testPanelId = 'test-panel-id'

describe('Panels', () => {
    describe('PUT /:panelId', () => {
        // chai.request(app)
        // .put(`/panel/${testPanelId}`)
        // .end((err, res) => {
        //     res.should.have.status(200);
        //     res.body.should.be.a('object');
            
        //     const responseJson = JSON.parse(res.body) as Response
        //     expect(responseJson.message as String).to.not.be.undefined
        // })
    })

    describe('POST /:panelId/ping', () => {

    })
})