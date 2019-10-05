# Burger

## Description

This site is a simple one which lists burgers from a mysql database. They are split up into separate lists based off of whether they have been "devoured" or not. Users are also able to eat or order more of a burger via buttons on the page, and are able to add burgers to the page and database using the input on the page.

## Technologies Used
* Node
* Express
* MySQL
* Handlebars

## Code/Structure
This code is organized using MVC architecture. 

The html of the pages are all added dynamically using handlebars.js. All of the pages relating to that are located in the views folder. The public folder contains all static files being served to the page. 

The config folder contains my orm and the connection to the database

The functions used to communicate with the database are: 
* selectAll: 
  - receives all the data from the db 
  - the controller then uses this data to serve to the handlebars in order to be rendered to the page
* insertOne:
  - adds a new entry to the db
  - used to take input from user and add new burger to page
* updateOne:
  - edits the information related to a database entry 
  - used to change a burger's state between devoured or not