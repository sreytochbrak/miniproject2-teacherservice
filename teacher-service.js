

const express = require('express');
const app = express();
app.use(express.json());

app.post('/addassignment', (req, res) => res.send('Assignment added!'));
app.get('/searchstudent', (req, res) => res.send('Student found!'));
app.delete('/removestudent', (req, res) => res.send('Student removed!'));

app.listen(3002, () => console.log('Teacher service running on 3002'));