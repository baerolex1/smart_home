# Setup

``git clone https://github.com/simon-ittmann/iot-server.git``

``npm i``

``npm run start``

# API

## Get all configurations

GET http://localhost:3000/api/configurations

## Get configuration for one device

GET http://localhost:3000/api/configurations/{deviceId}

example: GET http://localhost:3000/api/configurations/device1

## Add new measure

POST http://localhost:3000/api/measurements/{deviceId}

any measurement as json format in the body like this:
{
    "value": 77,
    "anyOtherProperty": "test"
}