const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const contact = require("./Models/contact.js");

dotenv.config();

const app = express();
app.use(express.json()); // to parse JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log("MongoDB connection error ❌:", err));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

// POST route to save message and send email
app.post("/send-message", async (req, res) => {
    const { name, email, number, subject, message } = req.body;

    try {
        // Save to DB
        const newMessage = new contact({ name, email, number, subject, message });
        await newMessage.save();

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL, // can be your admin or support email
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h3>New Message from ${name}</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${number}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        });

        res.status(200).json({ message: "Message sent and saved successfully!" });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Something went wrong." });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
