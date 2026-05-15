# Express Course API

A simple RESTful API built with Express.js for learning backend development concepts such as routing, CRUD operations, request validation, and JSON handling.

## Features

- Get all courses
- Get a single course by ID
- Add a new course
- Update existing courses
- Delete courses
- Request body validation using express-validator
- JSON-based in-memory data storage

## Technologies Used

- Node.js
- Express.js
- express-validator

## API Endpoints

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | /api/courses       | Get all courses        |
| GET    | /api/courses/:id   | Get single course      |
| POST   | /api/courses       | Create a new course    |
| PATCH  | /api/courses/:id   | Update a course        |
| DELETE | /api/courses/:id   | Delete a course        |

## Installation
```
npm install
```
##Run the Project
```node index.js```

##Server runs on:
```http://localhost:5000```

##Learning Goals

This project was created for practicing:

REST API fundamentals
Express.js routing
CRUD operations
Middleware usage
Request validation
Backend development basics
