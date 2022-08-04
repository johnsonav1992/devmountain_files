const bcrypt = require('bcryptjs')

const users = []

module.exports = {
	login: (req, res) => {
		console.log('Logging In User')
		console.log(req.body)

		const { username, password } = req.body

		for (const userObj of users) {
			const regularPassword = bcrypt.compareSync(
				password, userObj.passwordHashed)
			console.log('passwords match')

			if (userObj.username === username && regularPassword) {
				res.status(200).send(userObj)
				return
			}
			res.status(400).send('User not found.')
		}
	},

	register: (req, res) => {
		console.log('Registering User')
		console.log(req.body)

		let { username, email, firstName, lastName, password } = req.body
		const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(12))

		let userObject = {
			username: username,
			email: email,
			firstName: firstName,
			lastName: lastName,
			passwordHashed: hashedPassword,
		}

		const { passwordHashed, ...restOfUserInfo } = userObject

		users.push(userObject)
		console.log(users)
		res.status(200).send(req.body)
	},
}
