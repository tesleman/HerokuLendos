import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'


export default async function Mailer(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "POST":
            const name = "SONEnAME";
            const from = req.body.email;
            const message = req.body.message;
            const to = '***';
            const phone = req.body.phone;
            const room = req.body.rooms;

            const smtpTransport = nodemailer.createTransport({
                service: "gmail",
                // port: 587,
                // secure: false,
                auth: {
                    user: "***",
                    pass: "***"
                }
            });
            const mailOptions = {
                from: from,
                to: to,
                subject: name + ' | new message !',
                text: message,
                html: `<b>${phone}, &  ${room}</b>`,

            }


            smtpTransport.sendMail(mailOptions, function (err, res) {
                if (err) {
                    console.log(err);
                    res.send("error" + JSON.stringify(err));
                } else {

                }
            });
            res.send({ data: 'Message Seand' });
    }


}