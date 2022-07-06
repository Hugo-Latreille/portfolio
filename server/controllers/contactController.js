const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const postMail = async (req, res) => {
	const data = req.body;
	console.log(data);

	if (
		data.name.length === 0 ||
		data.email.length === 0 ||
		data.message.length === 0
	) {
		return res.json({ msg: "Merci de remplir tous les champs du formulaire" });
	}

	const myOAuth2Client = new OAuth2(
		"285125527770-5rm3ape2vu1votrn9vvupu3mq2o2svn9.apps.googleusercontent.com",
		"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"
	);

	myOAuth2Client.setCredentials({
		refresh_token:
			"1//04MjZ_VvxZdlUCgYIARAAGAQSNwF-L9IrFMahPSQGgNsmg99uZAk_l3vpJiGA0HXvB66Xm2d1SlSFIkNBRpqFesK4USAUBqNd8e0",
	});

	const myAccessToken = myOAuth2Client.getAccessToken();

	const smtpTransporter = nodemailer.createTransport({
		service: "gmail",
		// port: 465,
		auth: {
			type: "OAuth2",
			user: "hugo.latreille@gmail.com",
			clientId:
				"285125527770-5rm3ape2vu1votrn9vvupu3mq2o2svn9.apps.googleusercontent.com",
			clientSecret: "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",
			refreshToken:
				"1//04MjZ_VvxZdlUCgYIARAAGAQSNwF-L9IrFMahPSQGgNsmg99uZAk_l3vpJiGA0HXvB66Xm2d1SlSFIkNBRpqFesK4USAUBqNd8e0",
			accessToken: myAccessToken,
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
