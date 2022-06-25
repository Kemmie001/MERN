const express = require("express");
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth')

const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

dotenv.config()
const app = express();
// view engine
// app.set('view engine', 'ejs');
connectDB()
app.use(authRoutes);

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/login', (req, res) => {
// 	res.json(posts)
// })

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/post"));
app.use(errorHandler)

app.listen(5000, () => {
	console.log("Listening on port 5000");
});