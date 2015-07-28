# bonsai-bot-controller-v0.0.1

A Node.js application for controlling Bonsai Bot rovers using a webpage hosted on the robot itself with an onboard Raspberry Pi / Banana Pro / Beaglebone Black and an Arduino Uno or compatible.

This project is still very much a work in progress. Currently it is still running on my PC and I am simply echoing commands sent to the Arduino onto a liquid crystal display. This proves the concept of driving the rover from a webpage.

This project only has a few dependencies and can be installed using a simple npm install in the root directory of the app. Then run node serv. Although make sure to upload the sketch to the Arduino before running node serv because it hogs the serial port. You will also need to change the serial port to match the one used by the Arduino on the computer you are using at the top of serv.js.

Go to the directory you wish to run this program out of:

$ git clone https://github.com/chrisfryer78/bonsai-bot-controller-v0.0.1.git

$ npm install

Find the serial port the Arduino is plugged into

$ node ports

$ nano serv.js

Edit this line with the correct port. As you can see I use and a Windows machine, on a Mac or 'nix box it will look like "/penguin/tty/meh/" or something similar.

var serialPort = new SerialPort("COM71", { baudrate: 57600 }, false); 

Save!

$ node serv

Then just open a web browser and navigate to the IP of the Pi and the port like this 192.168.0.96:3000 straight into the address bar. The :3000 will always be the same the IP changes or maybe even be a hostname such as localhost.
