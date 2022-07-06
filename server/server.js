const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const path = require("path");

app.use(express.static("static"));

app.use(cors("*"));
app.use(express.json());

app.use(router);

app.use(express.static(path.resolve(__dirname, "./../client/build")));
app.get(
	"/.well-known/acme-challenge/aKFky3WOjfFYOwsnGt_GikYZxG4SgzPAj0RDo-zNWoE",
	(_, res) => {
		res.send(
			"aKFky3WOjfFYOwsnGt_GikYZxG4SgzPAj0RDo-zNWoE.Cj9QdMA29yqVV8UBn0L_tT-mubGixKu6oLQD1nDUTnY"
		);
	}
);
app.get("*", (req, res) =>
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

app.set("port", process.env.PORT || 3000);
app.set("baseUrl", "http://localhost");
const server = app.listen(app.get("port"), () => {
	console.log(
		`Le serveur est lancé sur : ${app.get("baseUrl")}:${server.address().port}`
	);
});
