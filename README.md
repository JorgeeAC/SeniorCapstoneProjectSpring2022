# SeniorCapstoneProjectSpring2022

## Initial Setup

Assuming Python, Django, and npm are installed. Make sure you're inside of the project root directory.

### Running Project using run_project.sh (Highly Recommended)

- Run initial setup. (Recommended):  ```sh run_project.sh -i```
    - makes migrations and migrates
    - seeds database with services
    - runs Django and Webpack Server
- Run Django and Webpack server ```sh run_project.sh```


### Setting up Manually

- run ```python3 ./manage.py makemigrations``` to make migrations to any database or model changes made.
- run ```python3 ./manage.py migrate``` to migrate the changes.
- run ```python manage.py loaddata seed/0008_Services.json``` to seed database with Services.
- run ``` cd frontend/ && npm i``` to install all necessary dependencies from package.json.
- run command ```npm run dev``` to run the react server.
- **cd to root** and run command ```python3 ./manage.py runserver``` or ```python ./manage.py runserver``` to run the django server.

### When making any changes to the models or database
- cd to root. Use ```python3 or python``` respectfully.
- Make sure to run ```python3 ./manage.py makemigrations``` to make migrations to any database or model changes made.
- Then run ```python3 ./manage.py migrate``` to migrate the changes.

## Using run_project.sh

- Run Django and Webpack server ```sh run_project.sh```
- Specifiy Python version installed ```sh run_project.sh -p python3```
    - ```python``` is set by default.
- Run in inital mode ```sh run_project.sh -i```
    - ```sh run_project.sh -i -p python3 ``` or ```sh run_project.sh -ip python3``` for those that use a different python version.
- List available options ```sh run_project.sh -h```
