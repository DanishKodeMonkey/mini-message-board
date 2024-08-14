# Mini Message Board

A project to leverage the power of Express and EJS to create a basic message board.
The repository is purposely split to two branches, one operating on a pseudo database array. And one implementing a postgreSQL database

Simply switch branch to see the difference!


## Description

The Mini Message Board is a simple web application built using Express and EJS. It allows users to post messages, which are then displayed on a message board. The project uses an array as a pseudo-database to store messages.

## Features

    - Display messages on the message board.
    - Submit new messages through a form.
    - Messages include a username, message text, and the time the message was added.

## How It Works

    - Express is initialized with EJS designated as the view engine.
    - The user is presented with an index page at localhost:3000/.
    - The index page is rendered using an EJS template (index.ejs), which receives the messages array - from app.js.
    - A separate page with a form is available for submitting new messages.
    - Upon submission, the new message is added to the messages array and displayed on the message board.


#Check it out!
[Check it out here!](https://dkm-mini-messageboard.adaptable.app/)

## Conclusion

This Mini Message Board project is a basic example of how to create a simple web application using Express and EJS. It demonstrates the use of EJS templates, form handling, and basic server-side logic to manage a pseudo-database.
