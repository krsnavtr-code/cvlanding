require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const fs = require('fs/promises');
const path = require('path');
const mysql = require('mysql2/promise');

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

async function runMigrations() {
    const files = (await fs.readdir(__dirname))
        .filter((file) => file.endsWith('.sql'))
        .sort();

    const connection = await mysql.createConnection(dbConfig);

    try {
        for (const file of files) {
            const sql = await fs.readFile(path.join(__dirname, file), 'utf-8');
            const statements = sql
                .split(';')
                .map((s) => s.trim())
                .filter((s) => s.length > 0);

            for (const statement of statements) {
                await connection.query(statement);
            }

            console.log(`Executed migration: ${file}`);
        }
    } finally {
        await connection.end();
    }
}

runMigrations().catch((err) => {
    console.error('Migration failed:', err);
    process.exit(1);
});
