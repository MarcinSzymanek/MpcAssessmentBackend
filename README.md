# MpcAssessmentBackend
Deliverable for MPC Fullstack assessment task Backend - a REST API using Node.js, Typescript and Prisma ORM with Postgresql database.

### Build Instructions

To build the project and run it locally you must setup a new postgresql database either on your system, or host it online. For local testing, create a '.env' file in the root directory and enter following env variables:
```
REST_PORT=3000                      // The port this app will run on
DATABASE_URL=your_psql_db_url       // Postgres database url
```

Afterwards, navigate to project root directory and run the following commands:
```
npm install
npx prisma migrate reset
npm start
```
This will install the necessary dependencies, setup your database table, seed it and run the program. Be aware that `npx prisma migrate reset` command clears the database you connect to, so only use it to setup a new, fresh database!


### Endpoints
This API has 4 endpoints:

```
GET /products

```
* Returns all available products
```
GET /products?category={PARAM}
```
* Returns products filtered by category PARAM. Available categories are 'In-Ear', 'Over-Ear' and 'On-Ear'
```
GET /products/:ID
```
* Return product with a specific id. ID is a positive integer
```
POST /products
```
* Create a new product with the data specified in the body of the request. Format must be JSON, and header must include "Content-Type" : "application/json". Products have interface described with the following JSON Object
```
{
    "img_url": String,
    "name": String,
    "price": Float,
    "quantity": Integer,
    "category": String
}
```
For example:
```
{
    "name": "Headphones SONY Over-Ear.jpg",
    "price": 259.99,
    "quantity": 3,
    "img_url": "https://i.ibb.co/fz153DmY/Headphones-SONYOver-Ear.jpg",
    "category": "Over-Ear"
}
```

## Postman Query Examples

### Get all products

```
GET http://127.0.0.1:3000/products

[
    {
        "id": 1,
        "img_url": "https://i.ibb.co/TxqtCRbQ/c-d-x-PDX-a-82obo-unsplash.jpg",
        "name": "Headphones CDX Over-Ear",
        "price": 499.95,
        "quantity": 2,
        "category": "Over-Ear"
    },
    {
        "id": 2,
        "img_url": "https://i.ibb.co/fz153DmY/Headphones-SONYOver-Ear.jpg",
        "name": "Headphones SONY Over-Ear.jpg",
        "price": 259.99,
        "quantity": 3,
        "category": "Over-Ear"
    }, ...
]
```

### Get by Id
```
GET http://127.0.0.1:3000/products/1

{
    "id": 1,
    "img_url": "https://i.ibb.co/TxqtCRbQ/c-d-x-PDX-a-82obo-unsplash.jpg",
    "name": "Headphones CDX Over-Ear",
    "price": 499.95,
    "quantity": 2,
    "category": "Over-Ear"
}
```

### Get By Category
```
GET http://localhost:3000/products?category=Over-Ear

[
    {
        "id": 1,
        "img_url": "https://i.ibb.co/TxqtCRbQ/c-d-x-PDX-a-82obo-unsplash.jpg",
        "name": "Headphones CDX Over-Ear",
        "price": 499.95,
        "quantity": 2,
        "category": "Over-Ear"
    },
    {
        "id": 2,
        "img_url": "https://i.ibb.co/fz153DmY/Headphones-SONYOver-Ear.jpg",
        "name": "Headphones SONY Over-Ear.jpg",
        "price": 259.99,
        "quantity": 3,
        "category": "Over-Ear"
    }
]

```

### Post a product
```
POST http://127.0.0.1:3000/products

Request Body:
{
    "name": "Headphones SONY Over-Ear.jpg",
    "price": 259.99,
    "quantity": 3,
    "img_url": "https://i.ibb.co/fz153DmY/Headphones-SONYOver-Ear.jpg",
    "category": "Over-Ear"
}

Resp status 201
```