import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
const { Pool } = pg;

// Setup our connection config
const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: "localhost",
	database: process.env.DB_NAME,
	port: 5432,
});

// Make a connection to our Database
const connection = async () => {
	try {
		await pool.connect();
		console.log("DB Connected");
	} catch (error) {
		console.log("Error Connecting: ", error);
		process.exit(1);
	}
};

export { pool, connection };
