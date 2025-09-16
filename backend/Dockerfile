FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Install nodemon globally for development
RUN npm install -g nodemon

COPY . .

EXPOSE 3000

# Direct nodemon command (more reliable)
CMD ["nodemon", "server.js"]
