# Notes Application

A full-stack web application for creating and managing notes, built with Spring Boot, React, and PostgreSQL.

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.x
- PostgreSQL 15
- Spring Data JPA
- Spring Web

### Frontend
- React 18
- Node.js
- npm/yarn
- Axios for API calls

## Project Structure
```
notes-application/
├── backend/                 # Spring Boot application
│   ├── src/
│   ├── pom.xml
│   └── README.md
├── frontend/               # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
└── README.md              # This file
```

## Prerequisites

- Java Development Kit (JDK) 17 or later
- Node.js 14.x or later
- PostgreSQL 15
- IntelliJ IDEA (for backend)
- Cursor IDE (for frontend)
- Git

## Database Setup

1. Install PostgreSQL if not already installed
2. Create a new database:
```sql
CREATE DATABASE notes_db;
```


## Backend Configuration

1. Configure database connection in `backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/notes_db
spring.datasource.username=notes_user
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

2. Build and run the backend:
```bash
cd backend
./mvnw spring-boot:run
```

The backend server will start on `http://localhost:8080`

## Frontend Configuration

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Configure the API base URL in `.env`:
```env
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

3. Start the development server:
```bash
npm start
```

The frontend application will start on `http://localhost:3000`


![image](https://github.com/user-attachments/assets/72c86e42-d22c-444c-9eee-31fcb3455222)
