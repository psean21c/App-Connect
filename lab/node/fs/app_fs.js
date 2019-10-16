var fs = require('fs');

// reference
// https://node.readthedocs.io/en/latest/api/fs/#fsreadfilesyncfilename-options

// 1) Module 1
let readable = fs.createReadStream(__dirname + '/barcode.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

function readBarcode2() {
	readable.on('data', function (chunk) {
		// console.log(chunk);
		writable.write(chunk);
	});
}

// 2) Module 2
function readBarcode() {
	fs.readFile(__dirname + '/barcode.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 }, function (err, data) {
		if (err) throw err;

		const lines = data.split(/\r\n|\n/);

		lines.forEach((line) => {
			console.log(line);
		});
	});
}
readBarcode();

