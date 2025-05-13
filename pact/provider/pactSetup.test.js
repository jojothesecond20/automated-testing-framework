const path = require("path");
const { Verifier } = require("@pact-foundation/pact");

describe("Pact Verification", () => {
  it("validates the expectations of CalculatorFrontend", async () => {
    const opts = {
      provider: "CalculatorBackend",
      providerBaseUrl: "http://localhost:3000",
      pactUrls: [path.resolve(__dirname, '../../pacts/CalculatorFrontend-CalculatorAPI.json')],
      publishVerificationResult: true,
      providerVersion: "1.0.0"
    };

    const output = await new Verifier(opts).verifyProvider();
    console.log("✅ Pact Verification Complete:\n", output);
  });
});
