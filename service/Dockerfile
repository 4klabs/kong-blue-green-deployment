FROM oven/bun:1-alpine as base
WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.ts" ]
