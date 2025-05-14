FROM node:alpine

ARG USER_NAME=""
ARG USER_EMAIL=""
RUN apk update && apk add \
    git \
    openssh-client

RUN git config --global user.name ${USER_NAME}
RUN git config --global user.email ${USER_EMAIL}
RUN git config --global --add safe.directory /app

WORKDIR /app