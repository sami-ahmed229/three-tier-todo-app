# Task Manager Application

A three-tier web application with React frontend, Node.js backend, and PostgreSQL database.

## Architecture

- **Frontend**: React.js application served by Nginx
- **Backend**: Node.js/Express.js REST API
- **Database**: PostgreSQL

## DevOps Pipeline

1. Code is committed to GitHub
2. Jenkins detects changes and triggers pipeline
3. Pipeline stages:
   - Checkout code
   - Build Docker images
   - Run tests
   - Push images to AWS ECR
   - Deploy to AWS ECS

## Local Development

1. Clone the repository
2. Run `docker-compose up -d`
3. Access the application at http://localhost

## Environment Variables

### Backend
- DB_USER: Database username
- DB_PASSWORD: Database password
- DB_HOST: Database host
- DB_NAME: Database name
- DB_PORT: Database port
- PORT: Backend server port

### Frontend
- REACT_APP_API_URL: Backend API URL (optional)
