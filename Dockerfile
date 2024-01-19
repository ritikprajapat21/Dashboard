FROM node:18-alpine
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
CMD ["npm", "run", "dev"]
EXPOSE 3000
