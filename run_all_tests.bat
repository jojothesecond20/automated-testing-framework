@echo off

echo Activating virtual environment...
call .venv\Scripts\activate

echo Starting Flask API on port 62032...
start /B python app/api.py

echo Waiting for the server to start...
timeout /t 3 > nul

echo Running all automated tests...
python run_tests.py

echo Done. Press any key to exit.
pause
