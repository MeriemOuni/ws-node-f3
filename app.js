// import a local module
// const calcul = require("./localModule");
// import code module => installé avec node

// const fs = require("fs");
// console.log(fs);
// step 1
// console.log("startingg ....");
//  step 2
// let data = fs.readFileSync("./file.txt");
// console.log(data.toString());
// step 3
// console.log("finishingg ...");

const http = require("http");
const { request } = require("https");
http
	.createServer((request, response) => {
		response.end("hello mariam");
	})
	.listen(2121);
