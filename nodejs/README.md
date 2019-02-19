# Build

We can give our image a name, using the example below 

`$ docker build -t <username>/<name> .`

# Running

The flag `-p` says to container listen `<host-port>:<container-port>`  

`$ docker run --name express -p 2000:3000 <id-of-image>`

# Accessing

Just access the URL below in the browser or using curl 

http://localhost:2000