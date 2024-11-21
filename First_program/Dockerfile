# this has pre-installed node.
FROM node:latest 

COPY . /home/app

WORKDIR /home/app/

RUN npm install

EXPOSE 9000

CMD ["node","index"]