FROM node:16-alpine3.11 AS builder

RUN apk add --no-cache yarn --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community" 
RUN yarn -v

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . ./

RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

FROM node:16-alpine3.11 as deployer

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules

ENTRYPOINT [ "node" ]
CMD [ "dist/main.js" ]