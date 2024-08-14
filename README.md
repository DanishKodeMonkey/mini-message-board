# Mini Message Board

A project to leverage the power of Express and EJS to create a basic message board.

## Description

The Mini Message Board is a simple web application built using Express and EJS. It allows users to post messages, which are then displayed on a message board. The project uses an postgreSQL database to store messages.

The repository is purposely split into two branches, one using a pseudo-database array, and one implementing a postgreSQL database! Simply switch branches and have a look!

## Features

    - Display messages on the message board.
    - Submit new messages through a form.
    - Messages include a username, and message text.

### Update: postgreSQL implementation

    - Data persistence is now managed through PostgreSQL, allowing for more robust data handling and storage.

## How It Works

    - Express is initialized with EJS designated as the view engine.
    - The user is presented with an index page at localhost:3000/.
    - The index page is rendered using an EJS template (index.ejs), which receives the messages from database
    - A separate page with a form is available for submitting new messages.
    - Upon submission, the new message is added to the messages database through query functions thanks to postgresql and the express pg middleware.


# Check it out!
[Check it out here!](https://mini-messageboard-postgres.adaptable.app/)

## Conclusion

This Mini Message Board project is a basic example of how to create a simple web application using Express and EJS. It demonstrates the use of EJS templates, form handling, and basic server-side logic to manage a pseudo-database.
