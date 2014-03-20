var FileHandler = function(){

	var fs = require('fs'),
		_ = require('underscore'),
		self = this;

	this.deps = [];

	//TODO:
	// Look up all js in a directory and maybe sub directorys?

	this.findDependencies = function(fileName, file){

		var dependencies = file.match(/new(.)*\((.)*\)/g);

		//only want unique dependencys 
		dependencies = _.uniq(dependencies);

		_.each(dependencies, function(val){
			//Each val, make sure nothing between the (??) if it is remove it!
			console.log(val);
		});

		return {
			file: fileName,
			numberOfDependencies: dependencies.length,
			dependencies: dependencies
		};
	};

	return {
		processFile:function(path){
			var fileContent = fs.readFileSync(path).toString();

			var fileName = path.match(/(?!.*\/)(.)*/)[0];

			var dep = self.findDependencies(fileName, fileContent);

			self.deps.push(dep);
		},
		getDependencies: function(){
			return self.deps;
		}
	};
};


module.exports = FileHandler;

