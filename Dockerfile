# Production Dockerfile for Next.js app
FROM node:20-alpine as base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
RUN npm run build

# Start container
CMD ["npm", "start"]
