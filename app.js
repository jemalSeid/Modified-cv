//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent =
	"I am a development agent in plant science by profession. I have worked particularly hard to spread agricultural technology that boost crop yield and productivity in rural communities. I enjoy spending the majority of my time resolving people's issues. I believe this is the reason I decided to work as an agricultural development agent. Another example of this is my intention to get a degree in community health. My life's mission is to support those who are in need. No matter how strong you are, two is always better than one, is a proverb that is well-known in our nation. As a result, I think it's crucial that my coworkers and I work cooperatively. This is something I've developed through the course of my many years of teamwork.";
const aboutContent =
	"I have acquired sufficient knowledge about the field of community health care during my two years of education. frankly speaking, I wouldn't even try to claim to be a doctor, but I do have the knowledge and skills necessary to offer community health extension services. This is implied by my 3.37 overall CGPA. I think that by simply altering our nutrition and leading a healthy lifestyle, we may prevent non-communicable diseases like diabetes, hypertension, cardiovascular diseases, etc., which are rapidly becoming more prevalent in our community and throughout the world.";
const expirienceOne =
	"I have acquired sufficient knowledge about the field of community health care during my two years of education. frankly speaking, I wouldn't even try to claim to be a doctor, but I do have the knowledge and skills necessary to offer community health extension services. This is implied by my 3.37 overall CGPA. I think that by simply altering our nutrition and leading a healthy lifestyle, we may prevent non-communicable diseases like diabetes, hypertension, cardiovascular diseases, etc., which are rapidly becoming more prevalent in our community and throughout the world.";
const expirienceTwo =
	"I have acquired practical knowledge of a variety of advanced agricultural technologies and practices that raise agricultural output and productivity during my three years of college study. I have undergone skill development, mostly in pre and post - harvest programs that can guarantee the farmers' food security.";
const expirienceThree =
	"I believe I have made a start in realizing my dream. At the University ofthe People, I'm pursuing a bachelor's degree in computer science while also enrolling in Diaatech web development courses. The knowledge I have acquired from these online learning institutions and other websites has helped me improve my web development skills. As a result, I believe my goal of becoming a web developer has been accomplished.";
const app = express();

app.set("view engine", "ejs");
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(express.static("public"));

let posts = [];
app.get("/", function (req, res) {
	res.render("home", {
		homeStartingContent: homeStartingContent,
		posts: posts,
	});
});

app.get("/education", function (req, res) {
	res.render("education");
});
app.get("/expirience", function (req, res) {
	res.render("expirience", {
		expirienceOne: expirienceOne,
		expirienceTwo: expirienceTwo,
		expirienceThree: expirienceThree,
	});
});

app.get("/posts/:postName", function (req, res) {
	const requestedTitle = _.lowerCase(req.params.postName);

	posts.forEach(function (post) {
		const storedTitle = _.lowerCase(post.title);

		if (storedTitle === requestedTitle) {
			res.render("post", {
				newTitle: post.title,
				newContent: post.content,
			});
		}
	});
});
app.get("/contact", function (req, res) {
	res.render("contact"
	);
});
app.get("/about", function (req, res) {
	res.render("about", {
		aboutContent: aboutContent,
	});
});
// app.get("/compose", function (req, res) {
// 	res.render("compose");
// });

// app.post("/compose", function (req, res) {
// 	const post = {
// 		title: req.body.newMessage,
// 		content: req.body.postBody,
// 	};
// 	posts.push(post);
// 	res.redirect("/");
// });

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
