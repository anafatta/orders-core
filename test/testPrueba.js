let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:8000';

describe('get all vendedores: ',()=>{
 
  it('should get all vendedores', (done) => {
	    chai.request(url)
          .get('/api/vend')
	      .end( function(err,res){
	        //console.log(res.body)
	        expect(res).to.have.status(201);
	        done();
	       });
	  });
	});
	describe('Clientes: ',()=>{
 
		describe('get Clientes: ',()=>{
		  it('should get all Clientes', (done) => {
			 	chai.request(url)
					.get('/api/clientes')
					.end( function(err,res){
						//console.log(res.body)
						expect(res).to.have.status(201);
						done();
				});
			});
			it('should get Cliente 1', (done) => {
				chai.request(url)
				 .get('/api/clientes/id/1')
				 .end( function(err,res){
					 console.log(res.body)
					 expect(res.body[0]).to.have.property('id').to.be.equal(1);
					 expect(res).to.have.status(201);
					 done();
			 });
		 });

		});	

  });
	