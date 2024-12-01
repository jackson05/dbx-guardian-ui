# Stage 1: Build Angular app
FROM node:lts AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve app using Nginx
FROM nginx:alpine

# Copy the built Angular app to the Nginx directory
COPY --from=build /app/dist/dbx-guardian-ui /usr/share/nginx/html

# Expose port 4200
EXPOSE 4200
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
