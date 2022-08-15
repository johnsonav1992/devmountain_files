/////// Build Tower ////////
function buildTower(floors) {
	let tower = []

	for(let i = 1; i <= floors; i++) {
		let spaces = ' '.repeat(floors - i)
		let asterisks = '*'.repeat((i * 2) - 1)
		tower.push(`${spaces}${asterisks}${spaces}`)
	}
	return tower
}

module.exports = buildTower