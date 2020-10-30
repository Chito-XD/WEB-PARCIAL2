const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
    res.send('<h1>You are on the homepage</h1>');
});

app.post("/post", function(req, res) {
    const {user} = req.body;
    res.send(`<h1>Welcome ${user}</h1>`);
});

app.delete("/delete", function(req, res) {
    const {taskId} = req.body;
    res.json({delete: true});
});


app.put("/put/:id", function(req, res) {
    const {id} = req.params;
    res.send(`<h1>Task ${id} has been updated</h1>`);
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});