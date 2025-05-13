@echo off
REM Activate Python virtual environment
call .venv\Scripts\activate

REM Start Flask app in background
start /B python app/api.py

REM Wait for the server to be ready (adjust time as needed)
timeout /t 5 > nul

REM Run all tests
echo Running PyTest...
pytest tests/

echo Running Postman (Newman) tests...
newman run postman/collection.json

echo Running Pact contract verification...
npx mocha pact/provider/pactSetup.test.js

echo Running Cypress end-to-end tests...
npx cypress run

REM (Optional) Run k6 if added later
REM k6 run k6/performance-test.js

pause
