import mongoose from "mongoose";

export function connect() {
	if (mongoose.connection.readyState === 4 || mongoose.connection.readyState === 3)
		mongoose
			.connect(process.env.MONGO_URL, {
				useNewUrlParser: true
			})
			.then(() => console.log("Connected DB"))
			.then((err: any) => console.error(err));
}
