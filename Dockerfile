FROM node:10-alpine AS build
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY /src /app/src
COPY babel.config.js /app
COPY vue.config.js /app
RUN npm run build

FROM nginx:stable
COPY --from=build /app/dist/ /var/www
COPY ./docker/etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD nginx -g 'daemon off;'
