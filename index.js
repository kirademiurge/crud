import express from "express";
import mongoose from "mongoose";
import PostRouter from "./router/PostRouter.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL = ""; // specify the way to your mongodb

const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", PostRouter);

async function startApp() {
	try {
		await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
		app.listen(PORT, () => {
			console.log(`server started on port ${PORT}`);
		});
	} catch (e) {
		console.log(`startApp error: ${e}`);
	}
}
startApp();