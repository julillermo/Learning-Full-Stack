FROM node:current

# WORKDIR set differently than what's stated in the book
# since I always need permission to write to /home
WORKDIR /home/node/
COPY ./package.json ./package-lock.json ./node_modules /home/node/
EXPOSE 3000
