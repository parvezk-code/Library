#!/bin/sh 

export PATH=$HOME/bin:$PATH 

export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock 

docker run -d --net=host -e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix:ro -v $HOME/.Xauthority:$HOME/.Xauthority:ro -v ~/Music:/home/newuser firefox
