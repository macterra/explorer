FROM node:10.15.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /app

EXPOSE 3001

CMD [ "npm", "start" ]