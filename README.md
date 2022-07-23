# Smart Home

``git clone https://github.com/simon-ittmann/smart-home.git``

## Server

### Setup

``cd backend``

1) ``npm i`` (just initial)

2) Start database ``npm run run:db``

3) Run migrations ``npm run db:deploy`` (just initial)

4) Start backend ``npm run start:dev``

### API

**Get all devices:**
GET http://localhost:3000/api/devices

**Get single device:**
GET http://localhost:3000/api/devices/{deviceName}

**Get measurements for device:**
GET http://localhost:3000/api/measurements/{deviceName}

**Update device:**
PUT http://localhost:3000/api/measurements/{deviceName} 
{
    "enabled": true
}

**Add measure:**
POST http://localhost:3000/api/measurements/{deviceName}
{
"temperatureInDegree": 1,
"currentInAmpere": 3.5,
"voltageInVolt": 5,
"powerInWatts": 3,
"powerFactor": 5,
"frequencyInHertz": 43
}

## Frontend

``npm i``

``npm run start``
