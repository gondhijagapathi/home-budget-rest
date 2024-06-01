# Use a multi-stage build
FROM node:lts-alpine AS BUILD_IMAGE

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with verbose logging
RUN npm install --verbose

# Copy the rest of the application code
COPY . .

# Second stage
FROM node:lts-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy the built application from the previous stage
COPY --from=BUILD_IMAGE /usr/src/app/ ./

# Expose the port the app runs on
EXPOSE 3010

# Start the application
CMD ["node", "server.js"]
