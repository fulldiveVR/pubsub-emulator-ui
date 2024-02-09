FROM node:18-alpine as build

WORKDIR /app
ADD webapp .

RUN yarn
RUN yarn build

FROM nginx:alpine as serve
COPY scripts/docker/docker_nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/webapp .

EXPOSE 80
