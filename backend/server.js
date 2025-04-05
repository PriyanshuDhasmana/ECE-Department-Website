const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const staffRoutes = require('./routes/staff');
const alumniRoutes = require('./routes/alumni'); 
const elsocRoutes = require('./routes/elsoc');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ece_website')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/alumni', alumniRoutes);
app.use('/api/elsoc', elsocRoutes); 

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
