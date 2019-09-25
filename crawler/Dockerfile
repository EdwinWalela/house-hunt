# Choose Node version
FROM node:8
# Select working directory
WORKDIR /usr/src/app
# Copy to working directory
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm","start"]