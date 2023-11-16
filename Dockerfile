FROM node:16.17.0



COPY ["package.json", "/home/node"] 

WORKDIR /home/node

RUN npm install\
    && npm install typescript -g

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["node","./dist/index.js"]