const User = require('../Model/User');
const bcrypt = require('bcrypt')

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error getting users' });
  }
};

// Get a specific user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error getting user' });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove
    (req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
};


// exports.login = async ( req,res) =>{
//   const {email,password} = req.body;
//   try {
//     const user = await User.findOne({email});
//     if (!user){
//       return res.status(404).json({error:'user email is not found'});
//     }
//     const isPasswordVaild = await user.comaparePassword(password);
//     if(!isPasswordVaild){
//     return res.status(404).json({ error:'invalid password'});
//     }
//     res.status(200).json({message:'login sucessful'})
//   } catch (error) {
//     res.status(500).json({error:'login failed'})
    
//   }

  
// }

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // console.log('Email',email);
  // console.log('Password',password);
    try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};









