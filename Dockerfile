FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY package.json yarn.lock ./ 
RUN yarn --frozen-lockfile 

# ----

FROM node:20-alpine AS builder

WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
COPY .env ./.env
RUN yarn build

# ----

FROM node:20-alpine AS runner

WORKDIR /usr/src/app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static
ENV HOST 0.0.0.0
ENV TZ=Asia/Seoul

EXPOSE 3000

CMD [ "node", "server.js" ]