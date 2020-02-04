/*
Server Pg-Promise Connection | SUITAPP Web App
GROUP 1: Amine Bensalem, Douglas MacKrell, Savita Madray, Joseph P. Pasaoa
*/


const pgp = require('pg-promise')();
    const connectString = 'postgres://localhost:5432/suitapp_db';
    const db = pgp(connectString);


module.exports = db;
