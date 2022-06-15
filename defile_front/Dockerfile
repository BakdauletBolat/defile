ARG NODE_ENV

#Build stage
FROM node:16-alpine3.13 AS building-stage
USER root
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

#Production stage
FROM nginx:1.12-alpine AS production-stage
USER root
COPY ./nginx-front/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=building-stage /app/dist /usr/share/nginx/html
EXPOSE 5735
CMD [ "nginx", "-g", "daemon off;" ]
