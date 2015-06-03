import { expect } from 'chai';
import http from 'node-mocks-http';
import CORS from '../index.js';

describe('CORS middleware', () => {
    let cors;
    let request;
    let response;

    beforeEach(() => {
        cors     = CORS();
        request  = http.createRequest();
        response = http.createResponse();
    });

    it('should return middleware function', () => {
        expect(cors).to.be.a('function');
    });

    it('should add Access-Control-Allow-Origin header', done => {
        cors(request, response, () => {
            expect(response._isEndCalled()).to.be.false;
            expect(response.getHeader('Access-Control-Allow-Origin')).to.be.not.empty;
            done();
        });
    });
    it('should add Access-Control-Allow-Headers header', done => {
        cors(request, response, () => {
            expect(response._isEndCalled()).to.be.false;
            expect(response.getHeader('Access-Control-Allow-Headers')).to.be.not.empty;
            done();
        });
    });
    it('should add Access-Control-Allow-Methods header', done => {
        cors(request, response, () => {
            expect(response._isEndCalled()).to.be.false;
            expect(response.getHeader('Access-Control-Allow-Methods')).to.be.not.empty;
            done();
        });
    });
    it('should add Access-Control-Max-Age header', done => {
        cors(request, response, () => {
            expect(response._isEndCalled()).to.be.false;
            expect(response.getHeader('Access-Control-Max-Age')).to.be.not.empty;
            done();
        });
    });
});
