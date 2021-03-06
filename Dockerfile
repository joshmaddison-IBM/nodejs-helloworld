# use base Node.js image from Docker Hub
FROM node:12-alpine
EXPOSE 8080
WORKDIR /usr/src/app
COPY package*.json ./
# install required libraries (MongoDB client, Express)
RUN npm install mongodb express axios
COPY . .
CMD [ "node", "main.js"]
