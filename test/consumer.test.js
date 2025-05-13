const path = require("path");
const { Pact } = require("@pact-foundation/pact");
const axios = require("axios");
const { Matchers } = require("@pact-foundation/pact");

const provider = new Pact({
  consumer: "consumer",
  provider: "provider",
  port: 1234,
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  dir: path.resolve(process.cwd(), "pacts"),
  logLevel: "INFO",
});

describe("Pact with provider", () => {
  beforeAll(async () => {
    await provider.setup();
    await provider.addInteraction({
      state: "provider returns sum",
      uponReceiving: "a GET request to /api/add?a=1&b=2",
      withRequest: {
        method: "GET",
        path: "/api/add",
        query: {
          a: "1",
          b: "2",
        },
      },
      willRespondWith: {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: {
          result: Matchers.like(3),
        },
      },
    });
  });

  it("should return a successful body", async () => {
    const url = `${provider.mockService.baseUrl}/api/add?a=1&b=2`;
    const res = await axios.get(url);
    expect(res.status).toEqual(200);
    expect(res.data.result).toEqual(3);
  });

  afterAll(() => provider.verify().then(() => provider.finalize()));
});
