# BCON-Display

Frontend client display for the BCON RFID Arcade project.

## Overview

The frontend display is a simple web server responsible for maintaining real-time socket communication with the [backend](https://github.com/teambcon/BCON-Backend) and displaying the received information in an organized manner for players within the arcade.

It is currently configured to display gameplay statistics of all registered users in the backend, but could easily be reconfigured to display any subset of interesting information.

## Socket Communication

The frontend display uses [Socket.IO](https://socket.io) as the framework for establishing communication with the backend. As a client, is registers callback functions for announced events on the wire, which allows it to become completely event-driven.

When a recognized event is recieved (i.e. new statistics information), the callback function is executed and the display is updated in real time, with no need to refresh the page. A timestamp is updated at the footer of the page is indicate the timestamp of the last received event.

## Running the Display

### Prerequisites

- [Node.js and npm](https://nodejs.org/en/) (bundled together)

### Installing node_modules

Once the repository is cloned or downloaded and Node.js is installed, navigate to the project directory in a console window and execute `npm install`. It may take a minute or two to fetch all of the required modules for the project. Once completed, a new directory *node_modules* should appear in the project directory.

### Creating the server.txt file

For the client to run, it must be configured with a server address to run against. Thus, a text file `server.txt` must be created within the _public_ directory containing _only_ the address and port of the server connect to.

For example:

```
http://localhost:8081
```

### Starting the Display

The server can be started simply by executing `node client.js` from a console. To start a development configuration, run `npm start`, which will start the display locally on port 3002. Confirmation messages will appear on screen indicating that the display has started. Any errors will have their stack traces outputted to the console.

Once the display is running, open a web browser and view the frontend at the configured address.

#### Environment Variables

- Setting the environment variable `DEV=1` will run the display in development mode, which sets its port to 3002.
- To supply a custom port, be sure `DEV` is not defined and define it as `PORT=1234`. The port will default to 8082 if neither `DEV` nor `PORT` is set.
- To run in production mode, define the variable `NODE_ENV=production`.

