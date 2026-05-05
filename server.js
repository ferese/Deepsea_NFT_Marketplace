const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/deepsea', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('MongoDB Connection Error:', err));

// User model
const User = mongoose.model('User', new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // Added 'unique' constraint
  email: { type: String, required: true, unique: true },    // Added 'unique' constraint
  password: { type: String, required: true },
}));

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the username is empty or null
    if (!username || username.trim() === '') {
      return res.status(400).send('Username cannot be empty.');
    }

    // Check if the email already exists in the database
    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.status(400).send('Email already exists.');

    // Check if the username already exists in the database
    const existingUsername = await User.findOne({ username });
    if (existingUsername) return res.status(400).send('Username already exists.');

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user and save to the database
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    
    res.status(201).send('Signup successful!');
  } catch (error) {
    res.status(500).send('Error during signup.');
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('User not found.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Incorrect password.');

    res.status(200).send('Login successful!');
  } catch (error) {
    res.status(500).send('Error during login.');
  }
});

// Server setup
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
