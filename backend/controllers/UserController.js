const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, 'abcdefgh123456789', { expiresIn: '3d' });
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    //create token
    const token = createToken(user._id);
    res.status(200).json(email, token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
