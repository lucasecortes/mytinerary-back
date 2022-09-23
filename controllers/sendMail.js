const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { ID_CLIENT, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER } = process.env

const sendMail = async (mail, code) => {
    const client = new OAuth2(ID_CLIENT, GOOGLE_SECRET, GOOGLE_URL)

    client.setCredentials({ refresh_token: GOOGLE_REFRESH })

    const accessToken = client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: ID_CLIENT,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: GOOGLE_USER,
        to: mail,
        subject: 'Verify MyTinerary account',
        html: `
                <div>
                    <h1>Hello ${mail}</h1>
                    <a href="https://my-tinerary-back-duco.herokuapp.com/auth/verification/${code}">Click to verify</a>
                </div>
                <p>If you didn't create an account using this email, please ignore this email.</p>
            `
    }

    await transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Ok')
        }
    })
}

module.exports = sendMail