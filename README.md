![CI](https://github.com/jojothesecond20/automated-testing-framework/actions/workflows/test.yml/badge.svg)

# 📘 Dissertation Module – Automated Testing Framework for Web & Microservices

This project showcases a complete automated testing framework designed for scalable **web applications** and **microservices**, integrating:

- ✅ Unit testing (PyTest)
- ✅ API testing (Postman/Newman)
- ✅ End-to-End testing (Cypress)
- ✅ Contract testing (Pact)
- ✅ Performance testing (k6)
- ✅ Full CI/CD integration (GitHub Actions)

---

## 🧩 Project Structure

E:
└── automated-testing-framework
├── app
│ ├── init.py
│ └── api.py
├── tests
│ ├── unit
│ │ └── test_addition.py
│ └── integration
│ └── postman_collection.json
├── cypress
│ └── e2e
│ └── add_test.cy.js
├── pact
│ └── provider
│ └── pactSetup.test.js
├── pacts
│ └── consumer-provider.json
├── k6
│ └── performance-test.js
├── run_tests.py
├── run_all_tests.bat
├── requirements.txt
├── .github
│ └── workflows
│ └── test.yml
└── README.md


---

## ⚙️ Setup Instructions

### 1. Create Python Environment

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt

npm install -g newman
npm install -g k6
npm install  # local dependencies (for Cypress & Pact)


Use the included batch script:
run_all_tests.bat

This runs:

PyTest (Unit Tests)

Postman (Newman API Tests)

Cypress (End-to-End Tests)

Pact (Contract Verification)

k6 (Performance Tests)

This repo includes a GitHub Actions workflow that automatically:

Installs all dependencies

Starts Flask server

Runs all test stages (unit → E2E → contract → performance)

Outputs test results directly in CI

Workflow file:
.github/workflows/test.yml

| Layer       | Tool             | File/Folder                   |
| ----------- | ---------------- | ----------------------------- |
| Unit        | PyTest           | `tests/unit/test_addition.py` |
| Integration | Postman / Newman | `tests/integration/*.json`    |
| E2E         | Cypress          | `cypress/e2e/*.cy.js`         |
| Contract    | Pact             | `pact/*`, `pacts/*.json`      |
| Performance | k6               | `k6/performance-test.js`      |

Author
Yousef Jouda
Dissertation Project – University of West London
BSc (Hons) Computer Science, Class of 2025
