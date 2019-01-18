const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/*
* Create Tables
*/
const createTables = () => {
 const queryText =
   `CREATE TABLE IF NOT EXISTS
     Incidents(
       id SERIAL PRIMARY KEY,
       createdOn TIMESTAMPZ,
       createdBy VARCHAR(128) NOT NULL,
       type VARCHAR(128) NOT NULL,
       location POINT NOT NULL,
       status VARCHAR(128) NOT NULL,
       images BYTEA NOT NULL,
       videos BYTEA NOT NULL,
       comment TEXT NOT NULL,
       UpdatedAt TIMESTAMPZ
     )`;

 pool.query(queryText)
   .then((res) => {
     console.log(res);
     pool.end();
   })
   .catch((err) => {
     console.log(err);
     pool.end();
   });
}

/**
* Drop Tables
*/
const dropTables = () => {
 const queryText = 'DROP TABLE IF EXISTS reflections';
 pool.query(queryText)
   .then((res) => {
     console.log(res);
     pool.end();
   })
   .catch((err) => {
     console.log(err);
     pool.end();
   });
}

pool.on('remove', () => {
 console.log('client removed');
 process.exit(0);
});

module.exports = {
 createTables,
 dropTables
};
require('make-runnable');