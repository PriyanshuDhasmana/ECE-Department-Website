const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/ece_website')
  .then(async () => {
    // Check if an admin user exists
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('adminPassword123', 10); // hash password
      const adminUser = new User({
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin', // set role to admin
      });
      await adminUser.save();
      console.log('Admin user created successfully!');
    } else {
      console.log('Admin user already exists!');
    }

    mongoose.disconnect();
  })
  .catch(err => console.error(err));
