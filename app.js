import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// PostgreSQL configuration
// const db = new pg.Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'world',
//     password: 'Rohan@25',
//     port: 5432
// });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// db.connect();

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});