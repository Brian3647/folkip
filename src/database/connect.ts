export const mongoose = require("mongoose");

//connecting mongoose to db.

mongoose.connect(/* database here */ {
	useNewUrlParser: true,
})

	.then(db => console.log("db is connected"))
	.then(err => console.error(err));



