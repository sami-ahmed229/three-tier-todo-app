# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Define environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Command to run the application
CMD ["node", "server.js"]