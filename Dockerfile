FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install express http-errors morgan mongoose dotenv
RUN npm install --save-dev nodemon
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
