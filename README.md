# **Communication Contract**
Requesting and Recieving Data: The easiest and most straightforward way to request and recieve data will be
using fetch. This microservice only requires using the GET method, and listens on port 3000 although the port
may change in the future. Example calls will be shown below for each GET request.

### Retrive a list of all exercises
 ````
// Create an array to store the requested exercises
var exercises = [];

// Use fetch to request an array of all exercises
fetch("http://localhost:3000/exercises", {
    method: "GET" 
})
.then(response => response.json()) // Convert JSON object to JavaScript array
.then(data => exercises); // Assign the data array to the exercises array
````

### Retrive a random exercise
 ````
// Create a variable to store the random exercise
var exercise;

// Use fetch to request a random exercise
fetch("http://localhost:3000/exercises/random", {
    method: "GET" 
})
.then(response => response.json()) // Convert JSON object to JavaScript object
.then(data => exercise); // Assign the data to the exercise variable
````

### Retrive a list of exercises of a specific category
 ````
// Create a category variable to call a specific catgegory
var category = "strength";

// Create an array to store the requested data
var exercises = [];

// Use fetch to request an array of exercises matching the given category
fetch(`http://localhost:3000/exercises/filter?category=${category}`, {
    method: "GET" 
})
.then(response => response.json()) // Convert JSON object to JavaScript array
.then(data => exercises); // Assign the data array to the exercises array
````
