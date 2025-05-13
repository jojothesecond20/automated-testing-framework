const path = require('path');
const { Verifier } = require('@pact-foundation/pact');

describe('Pact Verification', () => {
  it('validates the expectations of the consumer', async () => {
    const opts = {
      provider: 'Provider',
      providerBaseUrl: 'http://localhost:60705', // <-- Make sure this is set
      pactUrls: [path.resolve(__dirname, '../../pacts/consumer-provider.json')],
      logLevel: 'info',
    };

    await new Verifier(opts).verifyProvider();
  });
});
