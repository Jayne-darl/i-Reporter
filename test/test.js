import chai from "chai";
import ChaiHttp from 'chai-http';
import app from '../server/app';


import 'chai/register-should';
chai.use(ChaiHttp);

describe('API endpoints /reports', () => {

    it('should return 201: (Created successfully) for POST /report', (done) => {
        const values = {

            "type": "intervention",
            "location": "naija",
            "comment": "djhfdksdkfhsdjkfsj",
        }
        chai.request(app)
            .post('/api/v1/report')
            .send(values)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('Object');
                res.body.should.have.property('Success');
                done();
            });
    });
    it('should return Bad Request for Incomplete parameters', (done) => {
        const values = {

            "type": "intervention",
            "location": "naija",
            "comment": "",
        }
        chai.request(app)
            .post('/api/v1/report')
            .send({ values })
            .end((err, res) => {
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.have.property('Error');
                done();

            });

    });
    it('should return Bad Request for non-matching parameters', (done) => {
        const values = {
            "type": "intervention",
            "location": "naija",
            "comment": false
        }
        chai.request(app)
            .post('/api/v1/report')
            .send({ values })
            .end((err, res) => {
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.have.property('Error');
                done();
            });

    });
})