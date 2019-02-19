# Download nodejs image
FROM node

# Setting the work directory to /app
WORKDIR /app

# Copying all content from current directory to /app dir
COPY . .

# Installing the dependecies
RUN npm install

# Running the server
CMD ["npm", "start"]
