FROM node:12.9.0-alpine
EXPOSE 3000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV="production"
COPY package.json package.json
RUN npm install && npm cache clean --force
COPY . .
# ARG NODE_ENV=production
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY package.json /usr/src/app/package.json
# RUN npm install --silent
# COPY . /usr/src/app
# RUN npm run postinstall
CMD ["npm","run","dev"]