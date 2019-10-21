/*jslint node:true*/
let Mailer = function () {
    "use strict";
    let mailer = require('nodemailer'),
        mailConfig = require('../javascripts/config.mail');

    // method
    let send = (to, subject, body, ccemail) => {
        return new Promise((resolve, reject) => {
            let transport, mailOptions;
            transport = new mailer.createTransport({
                host: mailConfig.smtp.host,
                port: mailConfig.smtp.port,
                service: mailConfig.smtp.auth.service,
                auth: {
                    user: mailConfig.smtp.auth.user,
                    pass: mailConfig.smtp.auth.pass,
                },
                secure: false,
                // ignoreTLS: mailConfig.smtp.ignoreTLS
            });
            mailOptions = {
                from: mailConfig.smtp.fromAddress,
                to: to,
                subject: subject,
                html: body,
                cc: ccemail
            };
            //send mail
            transport.sendMail(mailOptions, function (error, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
        })
        // .then((result) => {
        //     resolve(result);
        // })
        // .catch((error) => {
        //     reject(error);
        // });
    }
    return {
        send: send,
    }
}

module.exports = new Mailer();