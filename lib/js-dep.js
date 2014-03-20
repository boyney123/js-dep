#! /usr/bin/env node
/*
 * js-dep
 * https://github.com/davidboyne/Playground
 *
 * Copyright (c) 2014 boyney123
 * Licensed under the MIT license.
 */

'use strict';

var FileHandler = require('./modules/FileHandler.js')();
var path = require('path');


var userArgs = process.argv.slice(2);
var filepath = path.resolve(process.cwd(), userArgs[0]);

//Read the given file
FileHandler.processFile(filepath);

console.log(FileHandler.getDependencies());

//Read file and check deps. Log how many and what they are in line
//or just output to JSON. Take 2nd param and take path
//
//maybe vis datas 

exports.awesome = function() {
	console.log(process.argv);
  	return 'awesome';
};
