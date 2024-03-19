
exports.getUsers = (req, res) =>{
    res.send("Get all the users")
}

// Get user by ID
exports.getUserById = (req, res) => {
    // Your logic to fetch a specific user based on ID
    res.send('GET request to a specific user with id');
};

// Create a new user
exports.createUser = (req, res) => {
    // Your logic to create a new user
    res.send('POST request to create a new user');
};

// Update a user
exports.updateUser = (req, res) => {
    // Your logic to update a user
    res.send('PUT request to update a user');
};

// Delete a user
exports.deleteUser = (req, res) => {
    // Your logic to delete a user
    res.send('DELETE request to delete a user');
};

