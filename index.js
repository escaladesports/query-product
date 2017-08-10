'use strict'
module.exports = query => {
	const products = require('./json/product/all.json')

	// Find matches
	const matches = []
	for(let i in products){
		const product = products[i]
		let match = true
		for(let i in query){
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