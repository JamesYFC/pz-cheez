# build stage
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# prod stage
FROM node:20-alpine AS prod

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY --from=build /app/dist ./dist

COPY --from=build /app/src/server ./src/server

COPY --from=build /app/src/definitions ./src/definitions

EXPOSE 3000

CMD ["npm", "start"]