# SeniorCapstoneProjectSpring2022

# Initial Setup

Assuming Python, Django, and npm are installed. Make sure you're inside of the project root directory.

- run ```python3 ./manage.py makemigrations``` to make migrations to any database or model changes made.
- run ```python3 ./manage.py migrate``` to migrate the changes.
- run ``` cd frontend/ && npm i``` to install all necessary dependencies from package.json.
- run command ```npm run dev``` to run the react server.
- **cd to root** and run command ```python3 ./manage.py runserver``` or ```python ./manage.py runserver``` to run the django server.

# When making any changes to the models or database
- cd to root. Use ```python3 or python``` respectfully.
- Make sure to run ```python3 ./manage.py makemigrations``` to make migrations to any database or model changes made.
- Then run ```python3 ./manage.py migrate``` to migrate the changes.

