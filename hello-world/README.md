# Building

Using the command `build` to build our image 
The build command need one argument, can be a folder, here we say to look in this directory for a `Dockerfile` 

`$ docker build .` 

When the command finishs running, we'll see an ID that identifies unically our image, for example `85ac1565a014`

# Running

To run our image we use the command `run` 
The flag `--name` gives a name to our new running container, and the ID specifies which image the run command should use

`$ docker run --name hello 85ac1565a014`

# Stoping

The command `stop` stops the running container with the name `hello`

`$ docker stop hello`

# Seeing containers

`$ docker container ls` Shows all containers runnning 
`$ docker container ls -a` Shows all containers running and not running

# Removing

The command `rm` removes a container from docker environment 
We can remove an container using the ID or the name, for example the command `$ docker run --name hello 85ac1565a014` has generated a container with ID `8aee1e08b6c1`, so we can remove the container using 

`$ docker rm 8aee1e08b6c1` or `$ docker rm hello`