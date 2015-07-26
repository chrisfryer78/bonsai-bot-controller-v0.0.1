# bonsai-bot-controller-v0.0.1

A Node.js application for controlling Bonsai Bot rovers using a webpage hosted on the robot itself with an onboard Raspberry Pi / Banana Pro / Beaglebone Black and an Arduino Uno or compatible.

This project is still very much a work in progress. Currently it is still running on my PC and I am simply echoing commands sent to the Arduino onto a liquid crystal display. This proves the concept of driving the rover from a webpage.

This project only has a few dependencies and can be installed using a simple npm install in the root directory of the app. Then run node serv. Although make sure to upload the sketch to the Arduino before running node serv because it hogs the serial port. You will also need to change the serial port to match the one used by the Arduino on the computer you are using at the top of serv.js.
