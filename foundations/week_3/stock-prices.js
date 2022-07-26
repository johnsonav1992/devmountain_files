function best(stockPrices) {
	let lowestPrice = stockPrices[0]
	let maxProfit = 0

	stockPrices.forEach(price => {
		let profit = price - lowestPrice
		
		if (price < lowestPrice) {
			lowestPrice = price
		}

		maxProfit = Math.max(profit, maxProfit)
	})
	return maxProfit
}

console.log(`$${best([2, 3, 10, 6, 4, 8, 1])}`)