FROM node:8

WORKDIR /usr/src/app
# add path to path
# ENV PATH /app/node_modules/.bin:$PATH
# install and cache app depandancies
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@3.0.1 -g

COPY . .
EXPOSE 3000
EXPOSE 35729

CMD ["npm","start"]
