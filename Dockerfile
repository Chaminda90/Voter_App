FROM node:16

#creates app Directory
WORKDIR /usr/src/app

#install all dependencies related to the app
COPY package*.json ./

#run
RUN npm install

#build the app source
COPY . .


EXPOSE 8080
CMD [ "node", "server.js" ]
