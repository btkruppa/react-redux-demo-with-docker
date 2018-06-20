FROM node:8
COPY node-server .
EXPOSE 3001
RUN npm install
CMD ["npm", "start"]