const express = require('express');
const cors = require('cors');
const connectDb = require('./db.js');
const userRouter = require('./routes/user.routes.js');

const app = express();
const PORT = 3000;

// Connect to DB
connectDb();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/users", userRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server Listening at http://localhost:${PORT}`);
});
