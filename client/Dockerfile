FROM node:12-alpine

WORKDIR /usr/src/app/client

ENV PATH /usr/src/app/client/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
