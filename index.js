const express = require('express');
const app = express();
const cors = require('cors');
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());


// ROUTES

// create todo
app.post("/todos", async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1)", [description]
        );
    } catch (err) {
        console.error(err);
    }
});

// get all todo

// get a todo

// update a todo

// delete a todo


app.listen(5000, () =>{
    console.log("Server started on port 5000");
});