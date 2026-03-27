const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

let student = [
    {id: 1, name: "gift"},
    {id: 2, name: "john"},
    
]


app.get('/',(req, res) => {
    res.json(student);
});

app.post('/student', (req, res) => {
    const {name} = req.body;
    const newStudent = {id: student.length + 1, name };
    student.push(newStudent);
        res.status(201).json(newStudent);
});

app.listen(port, () => {
    console.log(`server running on ${port}`)
})