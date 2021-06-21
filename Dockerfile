FROM node:13.3-alpine AS BUILD_IMAGE

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

FROM node:13.3-alpine

WORKDIR /usr/src/app

COPY --from=BUILD_IMAGE /usr/src/app/ ./

EXPOSE 3010

CMD [ "node", "server.js" ]