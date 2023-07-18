
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# A wildcard for package.json AND package-lock.json 
COPY package*.json ./


# RUN npm ci --only=production   # for production
# RUN npm install                # for development
RUN yarn install                 # RUN apt-get install -y yarn   # RUN npm install -g yarn


# Bundle app source
COPY . .

# Install app dependencies
RUN apt-get update
RUN apt-get install -y git


EXPOSE 8080

CMD [ "node", "server.js" ]

# Building your image -   sudo docker build . -t   web-app-image
# list all images     -   sudo docker images
# Run the image       -   sudo docker run -p 8081:8080 -d  web-app-image
# Get container ID    -   sudo docker ps
# Enter the container -   sudo docker exec -it <container id> /bin/bash
# Print app output    -   sudo docker logs <container id>
# Stop a docker       -   sudo docker stop  <container id>
# Remove a image      -   sudo docker image rm -f <image id>
