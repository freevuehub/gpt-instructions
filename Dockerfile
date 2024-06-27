FROM node:20-slim AS base

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn build
ENV HOST 0.0.0.0
ENV TZ=Asia/Seoul
EXPOSE 3000

CMD [ "yarn", "start" ]