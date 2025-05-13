// pact/consumer/consumer.test.js
const path = require('path');
const { Pact } = require('@pact-foundation/pact');
const { Matchers } = require('@pact-foundation/pact');
const axios = require('axios');

const provider = new Pact({
  consumer: 'CalculatorFrontend',
  provider: 'CalculatorAPI',
  port: 1234,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO',
});

describe('Pact with Calculator API', () => {
  beforeAll(() =>
    provider.setup().then(() => {
      provider.addInteraction({
        state: 'calculator can add numbers',
        uponReceiving: 'a request to add 2 numbers',
        withRequest: {
          method: 'POST',
          path: '/add',
          headers: { 'Content-Type': 'application/json' },
          body: { a: 5, b: 3 },
        },
        willRespondWith: {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
          body: { result: Matchers.like(8) },
        },
      });
    })
  );

  it('sends a valid request', async () => {
    const response = await axios.post('http://localhost:1234/add', {
      a: 5,
      b: 3,
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(8);
  });

  afterAll(() => provider.verify().then(() => provider.finalize()));
});
