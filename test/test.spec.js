const chai = require('chai');
const rp = require('request-promise');

chai.should();

async function request(path) {
  return rp({
    url: `http://localhost:3000/insights/${path}`,
    method: 'GET',
    json: true,
    resolveWithFullResponse: true, // promise resolves with full response not just body.
    simple: false   // ensures promise resolves even if statusCode is not 200 series.
  });
}

describe('Insights Service', () => {
  describe('/categories', () => {
    context('can receive the json data', () => {
      it('should return a 200 ok', async () => {
        const response = await request('/categories');
        response.statusCode.should.equal(200);
      });
    });
  });
  describe('/cashflow', () => {
    context('can receive the json data', () => {
      it('should return a 200 ok', async () => {
        const response = await request('/cashflow');
        response.statusCode.should.equal(200);
      });
    });
  });
  describe('/merchants', () => {
    context('can receive the json data', () => {
      it('should return a 200 ok', async () => {
        const response = await request('/merchants');
        response.statusCode.should.equal(200);
      });
    });
  });
});
