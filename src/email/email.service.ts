import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class EmailService {
    private nodemailerTransport: Mail
    constructor(){
        this.nodemailerTransport = createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        })
    }
    async sendMail(options: Mail.Options){
        return this.nodemailerTransport.sendMail(options);
    }
}
