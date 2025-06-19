const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Validate fields
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            fullname,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "✅ User registered successfully",
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (err) {
        console.error("❌ Error while creating user:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = registerUser;
