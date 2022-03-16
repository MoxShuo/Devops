FROM node:latest
WORKDIR /App2
COPY package.json /App2
RUN npm install
COPY . /App2
CMD ["npm", "start"]
EXPOSE 3001

