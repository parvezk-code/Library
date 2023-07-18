#!/bin/sh
# copy this file to /home/newuser/container-apps/zz_geany.sh
# only need to change variables - appName, dockerFileContent

export DEBIAN_FRONTEND=noninteractive

appName="firefox"
installDir="$HOME/container-apps"
appDir="$installDir/$appName"
logoFile="logo.gif"
dockeFile="$appDir/Dockerfile"
scriptFile="$appDir/run.sh"
desktopFile="$HOME/Desktop/$appName.desktop"
rootlessScriptName="rootless-install.sh"
rootlessScriptURl="https://get.docker.com/rootless"
dockerBinExport="export PATH=\$HOME/bin:\$PATH"
dockerHostExport="export DOCKER_HOST=unix://\$XDG_RUNTIME_DIR/docker.sock"

# use apt-get install -y --no-install-recommends firefox
dockerFileContent="FROM ubuntu:20.04 \nRUN apt-get update \nRUN apt-get install -y firefox \nCMD firefox"

scriptFileContents="#!/bin/sh \n\n$dockerBinExport \n\n$dockerHostExport \n\ndocker run -d --net=host -e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix:ro   -v  \$HOME/.Xauthority:\$HOME/.Xauthority:ro -v ~/Music:$HOME $appName"

desktopFileContent="[Desktop Entry]\nVersion=1.0\nName=$appName-Container\nComment=Back up your data with one click\nExec=bash -c '$scriptFile'\nIcon=$appDir/$logoFile\nTerminal=false\nType=Application\nCategories=Utility;Application;"

#if sudo apt-get -qq install uidmap; then 
if dpkg -s  uidmap > /dev/null 2>&1; then
    echo " "
else
	echo "Package uidmap not found : apt-get install -y uidmap"
    exit 1
fi

if dpkg -s  curl > /dev/null 2>&1; then
    echo " "
else
	echo "Package curl not found : apt-get install -y curl"
    exit 1
fi


which docker > /dev/null 2>&1
cmd1=$?
systemctl --user status docker --no-pager | grep rootless > /dev/null 2>&1
cmd2=$?
docker -v > /dev/null 2>&1
cmd3=$?

# [ $cmd1 -eq 0 ] ||
if [ $cmd2 -eq 0 ] || [ $cmd3 -eq 0 ]; then
    echo "Docker already installed"
  else
    echo "----------------installing rootless docker-------------------"
    curl -o $rootlessScriptName -fsSL $rootlessScriptURl
    #wget -O $rootlessScriptName  $rootlessScriptURl
    sh $rootlessScriptName
    echo $dockerBinExport >> ~/.bashrc
	echo $dockerHostExport >> ~/.bashrc
fi

echo "------------------create app directory-----------------------------"
rm -r $appDir 
mkdir -p $appDir

echo "------------------create run.sh script-----------------------------"
touch $scriptFile
echo $scriptFileContents >> $scriptFile
chmod a+x $scriptFile

echo "------------------copy logo file-----------------------------"
cp ./$logoFile $appDir

echo "------------------create .desktop file-----------------------------"
rm $desktopFile
touch $desktopFile
echo $desktopFileContent >> $desktopFile
chmod a+x $desktopFile
cp $desktopFile $appDir
gio set $desktopFile metadata::trusted yes

echo "------------------create a docke file-----------------------------"
touch $dockeFile
echo $dockerFileContent >> $dockeFile
export PATH=$HOME/bin:$PATH 
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock
cat $dockeFile
docker image rm -f $appName
docker build -f $dockeFile -t $appName .
echo "--- Right click the icon $appName-Container and select 'Allow launching' ---"
