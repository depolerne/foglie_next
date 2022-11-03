# Build
FROM node:12.16-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm i --silent
COPY ./ /app/
RUN npm run build
RUN npm run prod

# Serve
FROM nginx:1.17.9-alpine
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /etc/nginx/logs
RUN touch /etc/nginx/logs/error.log
RUN chmod 777 /etc/nginx/logs/error.log
COPY --from=build-stage /app/nginx.conf /etc/nginx
COPY --from=build-stage /app/out/ /usr/share/nginx/html
EXPOSE 80 443
CMD nginx -g "daemon off;"
