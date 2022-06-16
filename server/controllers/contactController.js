const nodemailer = require("nodemailer");

const postMail = async (req, res) => {
	const data = req.body;

	if (
		data.name.length === 0 ||
		data.email.length === 0 ||
		data.message.length === 0
	) {
		return res.json({ msg: "Merci de remplir tous les champs du formulaire" });
	}

	const smtpTransporter = nodemailer.createTransport({
		service: "Gmail",
		port: 465,
		auth: {
			user: "hugo.latreille@gmail.com",
			pass: "yjbskwwkutgtydvk",
		},
	});

	const mailOptions = {
		from: data.email,
		to: "hugo.latreille@gmail.com",
		subject: `message from ${data.name}`,
		html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
	};

	smtpTransporter.sendMail(mailOptions, (error) => {
		try {
			if (error)
				return res
					.status(400)
					.json({ msg: "Merci de remplir tous les champs du formulaire" });
			res.status(200).json({ msg: "Merci d'avoir pris contact !" });
		} catch (error) {
			if (error) return res.status(500).json({ msg: "Erreur server" });
		}
	});
};

module.exports = postMail;
