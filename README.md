# freindFinder

### Overview

This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

## Demo
	
*Friend Finder* is deployed to Heroku. Please check it out [here](https://fast-coast-30931.herokuapp.com/).

## Local Usage

1. Intallation

install the application follow the instructions below:

	git clone https://github.com/jian001qq2/FreindFinder
	npm install
	
1. Running

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	var PORT=8000
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
If all done correctly, you will see the message App listening on PORT.
The application will now be running locally on `PORT`, in this case that is port 8000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:8000`.