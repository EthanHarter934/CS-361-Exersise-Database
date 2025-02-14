var express = require('express');
var exerciseData = require("./exerciseData.json").exercises;

var app = express();
var port = 3000;

app.get("/exercises", (req, res) => {
    res.json(exerciseData);
});

app.get("/exercises/random", (req, res) => {
    res.json(exerciseData[Math.floor(Math.random() * exerciseData.length)]);
});

app.get("/exercises/filter", (req, res) => {
    var { category } = req.query;
    filteredExercises = exerciseData.filter(exercise => exercise.category === category);
    res.json(filteredExercises);
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});