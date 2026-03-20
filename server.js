const express = require("express");
const path = require("path");

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post("/book", (req, res) => {
    const { name, email, checkin, checkout } = req.body;

    res.send(`
        <h2>Booking Confirmed!</h2>
        <p>Thank you, ${name}.</p>
        <p>Your luxury stay from ${checkin} to ${checkout} is reserved.</p>
        <a href="/">Back to Home</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
