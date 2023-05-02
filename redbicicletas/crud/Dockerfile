FROM mhart/alpine-node:8
ENV NODE_VERSION 8.9.4

RUN mkdir /app
WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app
# ENV PORT 8080
EXPOSE 1111
ENTRYPOINT [ "npm", "start"]