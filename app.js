// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes= require("./Routes/userRoute");

dotenv.config();
connectDB();

// Create express app
const app = express();
app.use(express.json());



app.use("/api/v1/photoshoot",userRoutes);
















// Health check
app.get('/', (req, res) => {
  res.send({ message: 'Shootic backend is live!' });
});


// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
