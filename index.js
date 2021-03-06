'use strict'
module.exports = function(query){
	var products
	try{
		products = require(`${process.cwd()}/json/product/all.json`)
	}
	catch(e){
		products = false
	}

	if(products === false){
		try{
			products = require('../../json/product/all.json')
		}
		catch(e){
			console.log('json/product/all.json not found')
		}
	}

	// Find matches
	var matches = []
	for(var i in products){
		var product = products[i]
		var match = true
		for(var i in query){
			if(query[i] !== product[i]){
				match = false
				break
			}
		}
		if(match === true){
			matches.push(product)
		}
	}

	// Sort
	matches.sort(sortMatches)
	return matches
}

function sortMatches(a, b){
	if(a.order < b.order){
		return -1
	}
	if(a.order > b.order){
		return 1
	}
	return 0
}