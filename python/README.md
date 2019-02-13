# Build

We can give our image a name, using the example below 

`$ docker build .`

# Running

The flag `-p` says to container listen `<host-port>:<container-port>`  
Flask default port is `5000`, so inside the container it'll listen on port 5000!!

`$ docker run --name flask -p 3000:5000 <id-of-image>`

# Accessing

Just access the URL below in the browser or using curl 

http://localhost:3000