const express = require('express');
const { getConnection } = require('./db');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/data', async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM finvestfx');
    connection.end();

    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/data', async (req, res) => {
  try {

    console.log(req.body);
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM finvestfx');
    connection.end();

    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
