# Use an official Nodejs runtime as a parent image
FROM node:10

# Set the working directory to /app
WORKDIR /app

COPY package.json /app

# Install any needed packages specified in requirements.txt
RUN npm install 

# Copy the current directory contents into the container at /app
COPY . /app

# Make port 80 available to the world outside this container
EXPOSE 8080

CMD ["node", "main.js"]


# Run app.py when the container launches
# CMD ["node", "main.js"]