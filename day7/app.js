const express = require('express');
const app = express();
const port = 5000;
app.use(express.json())


//data base(json)
const students = [{
        id: 1,
        name: "Disha"
    },
    {
        id: 2,
        name: "Sohan"
    }
]


// API for read(for id)
app.get('/read/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const std = students.find(s => s.id === id);
    if (!std) {
        return res.status(404).json({ message: "data not found" });
    }
    res.json(std);
})


//api for read
app.get('/read', (req, res) => {
    res.json(students);
})


//API for create(c)
app.post('/add', (req, res) => {
        const newdata = {
            id: students.length + 1,
            ...req.body
        }
        students.push(newdata);
        res.json({ message: "data add", data: newdata });
    })
    // api for delete
app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.json({
        message: "data deleted",
        data: students
    });
})



app.listen(port, () => {
    console.log(`server run http://localhost:${port}`);
})