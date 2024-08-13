const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
username VARCHAR(255), 
message VARCHAR(600));

INSERT INTO messages (username, message) VALUES 
('Monkey', 'Hey I am the danish Kode Monkey! I made the first message! WOoo!'),
('Brick', 'I am a brick, I stand tall and topple hardly'), 
('Weave', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odit deserunt, iste voluptates maiores consequuntur at magnam id facere eius harum totam ex commodi rerum voluptatibus unde quas nam minus.');
`;

async function main() {
    console.log('seeding...');
    console.log('Establishing client...');
    const client = new Client({
        connectionString: `postgresql://${process.env.db_user}:${process.env.db_password}@${process.env.db_host}:${process.env.db_port}/${process.env.db_database}`,
    });
    console.log('Client established');
    console.log('Conencting to database...');
    await client.connect();
    console.log('Connection established...');
    console.log('Querying SQL to database...');
    await client.query(SQL);
    console.log('Query succesful, ending connection...');
    await client.end();
    console.log('Connection ended');
    console.log('Seeding complete...');
}

main();
