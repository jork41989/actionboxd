FROM node:12.9.0-alpine
EXPOSE 5000
COPY . /app
WORKDIR /app
ENV NODE_ENV=production

RUN npm run frontend-install  && npm run build --prefix frontend \ 
   && npm install

CMD ["npm", "start"]
