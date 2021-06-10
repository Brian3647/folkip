// @ts-check
const path = require("path");

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")]
	}
};
