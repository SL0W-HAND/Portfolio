---
slug: cross-port
cover_image: https://daniel-carrete.vercel.app/images/projects_images/cross_port/page1.jpg
title: cross-port
author: Daniel
description: An application to transfer files, developed in javascript with electron, react and express
date: 25-November-2020
repo: https://github.com/SL0W-HAND/Cross_Port
---

## Resume
In this project, its main function is to transfer files on your local network or the internet by creating a server running in parallel with the main application on your computer with the help of express, which can be accessed with the IP of your pc.


## Starting with the project


This application was created using the combination of two very interesting technologies, such as reactjs and electron js, the first perhaps the most popular javascript framework for the frontend, and the second one of the most important frameworks for making desktop applications (which in turn means that we can have all the advantages of Node), putting these two together gives us a very interesting combination.


## Installation
Download the code from Github(), then having Node and Yarn installed, run the following commands:

```$ yarn install```

To install all packages

```$ yarn start```

Runs the app in the development mode.

or

```$ yarn build```

In the dist folder, you will find the .exe file which you can run and install with the usual installer (so far I have only tested the version for windows, I cannot guarantee the functionality on other platforms).

## Technical details (summarized)

To begin with, a react application was created and within this an electron js application
and these had to run in parallel, this brought some problems since it meant that the UI, which is where the user interacts with the application (in charge of Reactjs), must communicate with the "backend" process (in charge of electron js ), which is the part in charge of all the logic of the application and the interaction with the PC's functionalities, this problem was somewhat difficult in particular since the way to do this communication is slightly different than in the official documentation (soon a more detailed tutorial).

The next challenge was the creation of a server with node, where the difficulty lay in being able to turn off the server, and it will not affect the main electron js application, so the solution I found was to create a child process that would run in parallel to this one, which is a lifelong basic server with express. this will be created and destroyed when the application orders it.


## Overview

This section will explain how some of the UI components work

In the image below we can see at the top 2 buttons, one of which opens a dialogue window that serves to select the files you want to add, the technical idea is that in a variable that contains all the files (their name and path each specifically), the other reset files button resets the variable.

The central part is the list of the names of the selected files, and on the side, the component detects whether or not it is connected to a network (based on this it is determined whether the server can be started or not) in case of Being connected shows the name of the network (censored in the image for security reasons), technically the information comes from the "backend" and is shown in the UI, and when the server is turned on the aforementioned child process is created.

![image1](https://daniel-carrete.vercel.app/images/projects_images/cross_port/page1.jpg)


On the next screen, once the server is turned on, 2 QR codes are shown along with an IP address that must be accessed to download the files (when scanning the QR codes, it goes to the web page created by the server), the IP address is obtained by the "backend" and is directed to the UI that generates the QR code, additionally, the lower button transmits the order to kill the child process.

![image2](https://daniel-carrete.vercel.app/images/projects_images/cross_port/page2.jpg)


Once the server is created, a page is created that lists the previously selected files, giving the option to download or read them, because the number of files and their names are never the same, it is not possible to create static files, so it was necessary to implement a template engine (handlebars) to work this part dynamically to list the files.


![image3](https://daniel-carrete.vercel.app/images/projects_images/cross_port/page3.jpg)

![image4](https://daniel-carrete.vercel.app/images/projects_images/cross_port/page4.jpg)



### Problems
Because an SSL certificate must be created for each server to have an HTTPS connection since it was not possible for me to program the creation of one in the installation of the program, the page created will only have the HTTP connection.
