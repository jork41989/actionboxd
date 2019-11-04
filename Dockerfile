FROM node:12.9.0-alpine
EXPOSE 3000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV="production"
COPY package.json package.json
RUN npm run frontend-install
COPY . .

