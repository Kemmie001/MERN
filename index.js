const express = require("express");
const authRoutes = require('./routes/auth')
const app = express();

// view engine
app.set('view engine', 'ejs');

app.use(authRoutes);


// const posts = [
// 	{
// 		username: "Destiny",
// 		post: "Excellent Flutter Dev"
// 	},
// 	{
// 		username: "Doris",
// 		post: "Excellent Vue Dev"
// 	}
// ]

// app.get('/posts', (req, res) => {
// 	res.json(posts)
// })
// app.get('/login', (req, res) => {
// 	res.json(posts)
// })

// app.use("/auth", require("./routes/auth"));
// app.use("/posts", require("./routes/posts"));

app.listen(5000, () => {
	console.log("Listening on port 5000");
});