# Smart Home

``git clone https://github.com/simon-ittmann/smart-home.git``

## Server

### Setup

``cd backend``

1) ``npm i`` (just initial)

2) Start database ``npm run run:db``

3) Run migrations ``npm run db:deploy`` (just initial)

4) 


### API

Get all configurations

GET http://localhost:3000/api/configurations

Get configuration for one device

GET http://localhost:3000/api/configurations/{deviceId}

example: GET http://localhost:3000/api/configurations/device1

Add new measure

POST http://localhost:3000/api/measurements/{deviceId}

any measurement as json format in the body like this:
{
"value": 77,
"anyOtherProperty": "test"
}


http://localhost:5555/

## Frontend

``npm i``

``npm run start``
