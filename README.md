# Todo API

A simple RESTful Todo API built with **Node.js** and **Express.js** as part of the **DecodeLabs Full Stack Development Internship – Week 2 Project**.

## Project Overview

This project demonstrates the fundamentals of backend API development without using a database. Task data is stored temporarily in an in-memory JavaScript array.

The API supports basic CRUD operations:

* Create a task
* Read all tasks
* Read a single task by ID
* Update a task
* Delete a task

## Features

* RESTful API design
* Express.js routing
* JSON request and response handling
* Input validation
* HTTP status codes
* In-memory data storage
* Error handling for invalid requests

## Technologies Used

* Node.js
* Express.js
* JavaScript (ES Modules)
* Nodemon
* Dotenv

## Project Structure

```text
todo-api/
│
├── config/
│   └── env.js
│
├── data/
│   └── tasks.js
│
├── routes/
│   └── tasks.routes.js
│
├── .env.development.local
├── .env.production.local
├── app.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project folder:

```bash
cd todo-api
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The server will run on the port specified in your environment file.

## API Endpoints

### Get all tasks

```http
GET /api/v1/tasks
```

---

### Get task by ID

```http
GET /api/v1/tasks/:id
```

---

### Create a new task

```http
POST /api/v1/tasks
```

Example request body:

```json
{
  "title": "Complete DecodeLabs assignment",
  "dateForCompletion": "2026-07-20"
}
```

---

### Update a task

```http
PATCH /api/v1/tasks/:id
```

Example request body:

```json
{
  "completed": true
}
```

---

### Delete a task

```http
DELETE /api/v1/tasks/:id
```

## HTTP Status Codes

| Status Code | Meaning                   |
| ----------- | ------------------------- |
| 200         | Request successful        |
| 201         | Task created successfully |
| 400         | Invalid request data      |
| 404         | Task not found            |

## Notes

* This project does **not** use a database.
* Data is stored in memory and will be reset whenever the server restarts.
* Database integration will be implemented in the next phase of the internship.

## Author

**Chris Dan Vic**

DecodeLabs Full Stack Development Intern (2026)
