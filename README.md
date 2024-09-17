# carwash-registration

The following are details based on the server creation

To set up and connect to a Node.js server using MySQL, Express, and Postman as a testing tool, while using Visual Studio Code (VSCode) as your IDE, follow these steps. I’ll guide you through setting up the environment, creating routes, connecting to the MySQL database, and testing with Postman.

Step 1: Install Node.js and MySQL
Download and install Node.js: Node.js Download
Install MySQL server on your machine if it’s not installed: MySQL Download
Install Postman for API testing: Postman Download
Step 2: Initialize a Node.js Project
Open VSCode and create a new directory called carwash-registration.

Inside the directory, run the following command to initialize a package.json file:
npm init -y
npm install express mysql

Step 3: Set Up MySQL Database
Open MySQL Workbench.
Create a database for the project

Step 4: Create MySQL Connection
Inside the carwash-registration folder, create a folder named config and a file inside it called db.js.

In db.js, configure the MySQL connection

Step 5: Set Up Express Routes
Inside the carwash-registration folder, create a folder called server and add a file server.js.

Define the routes in server.js
Step 6: Set Up server.js
You will see the following in the Terminals
MySQL Connected...
Server running on port 5000

Create an server.js file in the root directory.

Step 7: Run the Application
Run the server by typing the following command in your VSCode terminal:
node server.js

Step 8: Test with Postman
Open Postman.

To add a new member, make a POST request to http://localhost:5000/registration/add with a JSON body
