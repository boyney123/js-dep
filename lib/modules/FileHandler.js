var FileHandler = function(eventEmitter){

	var fs = require('fs'),
		self = this;

	this.deps = [];

	//TODO:
	// Look up all js in a directory and maybe sub directorys?

	this.findDependencies = function(fileName, file){
		var data = file.match(/new(.)*\((.)*\)/g);

		return {
			file: fileName,
			numberOfDependencies: data.length,
			dependencies: data
		}
	}

	return {
		processFile:function(path){
			var fileContent = fs.readFileSync(path).toString();

			var path = "/Users/davidboyne/dev/Playground/test/TestData.js";
			var fileName = path.match(/(?!.*\/)(.)*/)[0];

			var dep = self.findDependencies(fileName, fileContent);

			self.deps.push(dep);
		},
		getDependencies: function(){
			return self.deps;
		}
	}
}


module.exports = FileHandler;

