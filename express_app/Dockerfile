FROM node:latest
WORKDIR /App
COPY package.json /App
RUN npm install
COPY . /App
CMD ["npm", "start"]
EXPOSE 3000
