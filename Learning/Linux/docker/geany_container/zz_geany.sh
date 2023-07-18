#!/bin/sh
# this script need a docket linux image which has geany installed on it.

# copy this file to /home/newuser/container-apps/geany/zz_geany.sh
# copy icon image to /home/newuser/container-apps/geany/geany.png
# copy zgeany.desktop file to the Desktop and right click and choose option "allow launching"


export PATH=$HOME/bin:$PATH
# $XDG_RUNTIME_DIR
#export DOCKER_HOST=unix:///run/user/1000/docker.sock
docker context use rootless

docker run -d --net=host -e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix:ro   -v  $HOME/.Xauthority:$HOME/.Xauthority:ro -v ~/Music:/home/newuser geany

