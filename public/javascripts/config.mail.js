let mailConfig = {
	smtp: {
		"host": "smtp.gmail.com",
		"service": "gmail",
		"auth": {
			"user": "sarah.saran77@gmail.com",
			"pass": "2snowFlakes!@"
		},
		"port": 587,
		"secureConnection": false,
		// "ignoreTLS": true,
		"fromAddress": "sarah.saran77@gmail.com"
	}
}

module.exports = mailConfig;