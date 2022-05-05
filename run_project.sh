#!/bin/bash

python_variable='python'
start_script='start'
startup='false'

help() {
    echo "options:"
    echo "-h,         show available options"
    echo "-s,         run in start-up mode"  
    echo "-p,         specify your python variable, ex: (python3, python)"
}

while getopts 'p:sh' flag; do
    case "${flag}" in
        p) python_variable="${OPTARG}" ;;
        s) startup='true' ;;
        h) help 
            exit 1 ;;
    esac
done

if [ $startup = 'true' ]
then
    echo "Running in Startup Mode..."
    echo "Making migrations"
    $python_variable manage.py makemigrations
    echo "Migrating"
    $python_variable manage.py migrate
    echo "Loading seeded data for Services"
    $python_variable manage.py loaddata seed/0008_Services.json
fi

echo "Running Django and React Servers"
cd 'frontend/'
npm i
webpack --mode development --watch & cd .. && $python_variable manage.py runserver