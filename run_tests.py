import subprocess

print("Running PyTest...")
subprocess.run(["pytest"], check=True)

print("Running Newman...")
subprocess.run([
    r"C:\Users\Yousef Jouda\AppData\Roaming\npm\newman.cmd",
    "run",
    "api-tests.postman_collection.json"
], check=True)

print("Running Cypress...")
subprocess.run([
    r"C:\Program Files\nodejs\npx.cmd", "cypress", "run"
], check=True)

print("Running Pact Contract Tests...")
subprocess.run([
    r"C:\Program Files\nodejs\npx.cmd", "mocha", "pact/provider/pactSetup.test.js"
], check=True)

print("✅ All tests completed successfully.")
