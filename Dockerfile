FROM node:24

WORKDIR /app

COPY . /app/

RUN npm install
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start", "--", "-p", "80"]
