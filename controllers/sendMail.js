const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const { callbackPromise } = require('nodemailer/lib/shared')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_ID, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER} = process.env

const sendMail =  async(mail, code) => {
    const client = new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL='https://developers.google.com/oauthplayground'

    )

    client.setCredentials({
        refresh_token: GOOGLE_REFRESH
    })

    const accessToken = client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
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
        subject: 'verify mytinerary account',
        html: `
            <div>
                HOLIS
            </div>
        `
    }

    await transport.sendMail(mailOptions, (error, response) => {
        if(error) {
            console.log(error)
        } else {
            console.log('OK')
        }
    })
}

module.exports = sendMail