FROM node:12-alpine3.12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY codename .
RUN npm install --silent

CMD ["npm", "start"]
