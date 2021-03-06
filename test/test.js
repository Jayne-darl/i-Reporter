import chai from "chai";
import ChaiHttp from 'chai-http';
import app from '../server/app';

chai.should();
// import 'chai/register-should';
chai.use(ChaiHttp);

describe('API endpoints /reports', () => {

    it('should return 201: (Created red flag) for POST /report', (done) => {
        const values = {

            "type": "intervention",
            "location": "naija",
            "image": ["https://d2d42mpnbqmzj3.cloudfront.net/images/stories/doc-excel/convert-url-to-image/xdoc-url-to-image-1.png.pagespeed.ic.kKESXJHBXi.webp"],
            "video": [],
            "comment": "djhfdksdkfhsdjkfsj",
        }
        chai.request(app)
            .post('/api/v1/reports')
            .send(values)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('Object');
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
            .post('/api/v1/reports')
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
            .post('/api/v1/reports')
            .send({ values })
            .end((err, res) => {
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.have.property('Error');
                done();
            });

    });

    it('should return 200 for GET all /reports', (done) => {
        chai.request(app)
            .get('/api/v1/reports')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('Object');
                res.should.be.a.json;
                done();
            });
    });

    it('should return 200 for GET /reports/:id', (done) => {
        chai.request(app)
            .get('/api/v1/reports/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a.json;
                res.should.be.a('Object');
                res.should.be.json;
                done();

            });

    });

    it('should return 404 for GET /reports/:Id with an invalid ID', (done) => {
        chai.request(app)
            .get('/api/v1/reports/false')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.should.be.json;
                done();
            })
    });

})