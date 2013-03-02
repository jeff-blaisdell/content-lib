var fs = require('fs');

var files = fs.readdirSync('C:\\Users\\Jeff\\Documents\\GitHub\\content-lib\\WebContent\\images');

files.forEach(function(file) {
	if (file.indexOf("YB") === 0) {
		var img = fs.readFileSync('C:\\Users\\Jeff\\Desktop\\images\\icon.jpg');
		fs.writeFileSync('C:\\Users\\Jeff\\Documents\\GitHub\\content-lib\\WebContent\\images\\default\\' + file, img);
	}
});
