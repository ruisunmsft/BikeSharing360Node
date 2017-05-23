FROM node:7.10.0

# Install app dependencies
COPY . /
RUN cd /; npm install

CMD ["node", "/server.js"]