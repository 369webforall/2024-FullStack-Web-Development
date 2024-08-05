FROM node:14

WORKDIR /app

COPY . .

RUN npm install

RUN npx prisma db generate

RUN npm run build

EXPOSE 8000

CMD ["node", "app.js"]