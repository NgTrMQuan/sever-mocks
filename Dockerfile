FROM node:12-alpine

WORKDIR /app/

COPY /mocks ./mocks
COPY /src ./src
COPY package.json ./
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
