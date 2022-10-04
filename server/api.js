const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// MySQL=============================================
const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'foo',
	password: 'foo',
	database: 'israelhayom',
});

// Get all writers==============================================
app.get('', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) throw err;
		console.log(`connected as id ${connection.threadId}`);

		connection.query('SELECT * from writers', (err, rows) => {
			connection.release();

			if (!err) {
				res.send(rows);
			} else {
				console.log(err);
			}
		});
	});
});

// Get a writer by ID==============================================
app.get('/:id', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) throw err;
		console.log(`connected as id ${connection.threadId}`);

		connection.query('SELECT * from writers WHERE id = ?', [req.params.id], (err, rows) => {
			connection.release();

			if (!err) {
				res.send(rows);
			} else {
				console.log(err);
			}
		});
	});
});

// Delete a records
app.delete('/:id', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) throw err;
		console.log(`connected as id ${connection.threadId}`);

		console.log('req.param', req.param);
		console.log('req.params.id', req.params.id);

		connection.query('DELETE from writers WHERE id = ?', [req.params.id], (err, rows) => {
			connection.release();

			if (!err) {
				res.send(`Writer with the Record ID: ${[req.params.id]} has been removed.`);
			} else {
				console.log(err);
			}
		});
	});
});

// Add a record  ==============================================

const con = mysql.createConnection({
	host: 'localhost',
	user: 'foo',
	password: 'foo',
	database: 'israelhayom',
});

con.connect(err => {
	if (err) {
		console.log('Err connecting   ');
		return;
	}
	console.log('connection established ');
});

app.post('', (req, res) => {
	console.log('req.body :>> ', req.body);

	let writer = {
		id: req.body.id,
		name: req.body.name,
		image: req.body.image,
		article1: req.body.article,
		article2: req.body.article,
		article3: req.body.article,
	};

	let sqlQuery = 'INSERT INTO writers SET ?';

	con.query(sqlQuery, writer, (err, results) => {
		if (err) throw err;
		console.log('writer added, ID=', results.insertId);
		res.send(results);
	});
});

function apiResponse(results) {
	return JSON.stringify({ status: 200, error: null, response: results });
}

// Update a record ===========================================
app.put('/:id', (req, res) => {
	pool.getConnection((err, connection) => {
		if (err) throw err;
		console.log(`connected as id ${connection.threadId}`);

		const { id, name, image, article } = req.body;
		console.log('req.body :>> ', req.body);
		connection.query(
			'UPDATE writers SET name = ?,  image = ?,  article1 = ?,  article2 = ?,  article3 = ? WHERE id = ?',
			[name, image, article, article, article, id],

			(err, rows) => {
				connection.release();

				if (!err) {
					res.send(`Writer with the name: ${name} has been added.`);
				} else {
					console.log(err);
				}
			},
		);

		console.log(req.body);
	});
});

// Listen on environment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`));
