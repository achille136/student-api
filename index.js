const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

let students = [
    { id: 1, name: "gift" },
    { id: 2, name: "john" },
];

app.get('/students/:id', (req, res) => {
    const { id } = req.params;

    const foundStudent = students.find(s => s.id === parseInt(id));

    if (!foundStudent) {
        return res.status(404).json({ message: "student not found" });
    }

    res.json(foundStudent);
});

app.post('/student', (req, res) => {
    const { name } = req.body;
    const newStudent = { id: students.length + 1, name };
    students.push(newStudent);

    res.status(201).json(newStudent);
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});