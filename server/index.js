const express = require('express');
const mysql = require('mysql');
const app = express()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'formgym'
});

app.post('/submit', (req, res) => {
  const formData = req.body;
  const sql = 'INSERT INTO usres (fname, email, text) VALUES (?, ?, ?)';
  connection.query(sql, [formData.fname, formData.email, formData.text], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Form data saved successfully');
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});