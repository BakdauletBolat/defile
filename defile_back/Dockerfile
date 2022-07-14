ARG NODE_ENV

#Build stage
FROM node:16-alpine3.13 AS building-stage
USER root
RUN mkdir /app
WORKDIR /app
COPY ./defile_front/package*.json ./
RUN yarn install
COPY ./defile_front .
RUN yarn build


# pull official base image
FROM python:3.9.6-alpine as web_app

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
    && apk add -u postgresql-dev gcc python3-dev musl-dev  zlib-dev jpeg-dev

# install dependencies
RUN pip install --upgrade pip
COPY ./req.txt .
RUN pip install -r req.txt

# copy project
COPY . .

COPY --from=building-stage /app/build /usr/src/app/templates/build





