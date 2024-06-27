FROM node:lts

RUN mkdir -p /app
WORKDIR /app
COPY . ./
ADD . /app
ENV HOST 0.0.0.0
ENV TZ=Asia/Seoul
RUN yarn
RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]