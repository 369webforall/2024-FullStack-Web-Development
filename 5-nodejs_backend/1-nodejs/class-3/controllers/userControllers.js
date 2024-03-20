
const User = require('../models/user');

const getUsers = async (req, res) =>{
    const users = await User.find();
    if(!users){
        return res.status(500).send("No data found")
    }
    res.status(200).send(users)
}

// localhost:3000/users - all users


// Get user by ID
const getUserById = async(req, res) => {
    const userId = req.params.userId;
    const user = await User.findById({_id:userId})

    if(!user){
        res.status(400).send("No user found with this id")
        return;
    }

    res.status(200).send(user)
};

// localhost:3000/users/100 - all users
// Create a new user
const createUser = async(req, res) => {
    // Your logic to create a new user
    const user = new User({
        name:req.body.name,
        age:req.body.age,
        email:req.body.emai,
        password:req.body.password
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
    }
};

// Update a user
const updateUser = async (req, res) => {
 
 try {
    const userId = req.params.userId;
    const updatedData = req.body;

    const result = await User.findByIdAndUpdate(
        userId, updatedData
    )
    res.json(result)

 } catch (error) {
    console.log(error)
 }
};

// Delete a user
const deleteUser = async (req, res) => {
    // Your logic to delete a user
    try {
        const userId = req.params.userId;
       
    
         await User.findByIdAndDelete(
           {_id: userId}
        )
        res.json({message:`User is deleted with id: ${userId}`})
    
     } catch (error) {
        console.log(error)
     }
};


module.exports = {getUsers, getUserById, createUser, updateUser, deleteUser}