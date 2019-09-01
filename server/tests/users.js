import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
chai.should();

describe('get welcome message', () => {
    it('should return welcome message',(done)=>{
        chai.request(app).get('/').end((err,res)=>{
            res.body.should.be.an('object');
            res.body.should.have.property('status').eql(200);
            res.body.should.have.property('message').eql("Welcome to freeMentors");
            done();
        })
    });
})
