const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
// app.use(express.json());
//
// // Database connection
// const pool = new Pool({
//   user: process.env.DB_USER || 'postgres',
//     host: process.env.DB_HOST || 'localhost',
//       database: process.env.DB_NAME || 'todo',
//         password: process.env.DB_PASSWORD || 'password',
//           port: process.env.DB_PORT || 5432,
//           });
//
//           // Initialize table
//           const initDb = async () => {
//             await pool.query(`
//                 CREATE TABLE IF NOT EXISTS todos (
//                       id SERIAL PRIMARY KEY,
//                             task VARCHAR(255) NOT NULL,
//                                   is_completed BOOLEAN DEFAULT FALSE
//                                       );
//                                         `);
//                                           console.log('Database table initialized');
//                                           };
//                                           initDb();
//
//                                           // Routes
//                                           app.get('/api/todos', async (req, res) => {
//                                             try {
//                                                 const result = await pool.query('SELECT * FROM todos ORDER BY id');
//                                                     res.json(result.rows);
//                                                       } catch (err) {
//                                                           console.error(err);
//                                                               res.status(500).json({ error: 'Internal server error' });
//                                                                 }
//                                                                 });
//
//                                                                 app.post('/api/todos', async (req, res) => {
//                                                                   const { task } = req.body;
//                                                                     try {
//                                                                         const result = await pool.query('INSERT INTO todos (task) VALUES ($1) RETURNING *', [task]);
//                                                                             res.status(201).json(result.rows[0]);
//                                                                               } catch (err) {
//                                                                                   console.error(err);
//                                                                                       res.status(500).json({ error: 'Internal server error' });
//                                                                                         }
//                                                                                         });
//
//                                                                                         app.put('/api/todos/:id', async (req, res) => {
//                                                                                           const { id } = req.params;
//                                                                                             const { task, is_completed } = req.body;
//                                                                                               try {
//                                                                                                   const result = await pool.query(
//                                                                                                         'UPDATE todos SET task = $1, is_completed = $2 WHERE id = $3 RETURNING *',
//                                                                                                               [task, is_completed, id]
//                                                                                                                   );
//                                                                                                                       if (result.rows.length === 0) {
//                                                                                                                             return res.status(404).json({ error: 'Todo not found' });
//                                                                                                                                 }
//                                                                                                                                     res.json(result.rows[0]);
//                                                                                                                                       } catch (err) {
//                                                                                                                                           console.error(err);
//                                                                                                                                               res.status(500).json({ error: 'Internal server error' });
//                                                                                                                                                 }
//                                                                                                                                                 });
//
//                                                                                                                                                 app.delete('/api/todos/:id', async (req, res) => {
//                                                                                                                                                   const { id } = req.params;
//                                                                                                                                                     try {
//                                                                                                                                                         const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
//                                                                                                                                                             if (result.rows.length === 0) {
//                                                                                                                                                                   return res.status(404).json({ error: 'Todo not found' });
//                                                                                                                                                                       }
//                                                                                                                                                                           res.json({ message: 'Todo deleted' });
//                                                                                                                                                                             } catch (err) {
//                                                                                                                                                                                 console.error(err);
//                                                                                                                                                                                     res.status(500).json({ error: 'Internal server error' });
//                                                                                                                                                                                       }
//                                                                                                                                                                                       });
//
//                                                                                                                                                                                       app.listen(port, () => {
//                                                                                                                                                                                         console.log(`Server running on port ${port}`);
//                                                                                                                                                                                         });
