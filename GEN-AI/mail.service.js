import nodemailer from "nodemailer";
import"dotenv/config"


const transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 587,
     secure: false,
    
    // service:"gmail",
    auth:{
        type:"OAuth2",
        user:process.env.GOOGLE_USER,
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        refreshToken:process.env.GOOGLE_REFRESH_TOKEN

    }
})

transporter.verify()
.then(()=>{
    console.log("transporter is ready to sent emails");
})
.catch((err)=>{
    console.error("transporter verification failed");
})

export async function sendEmail({ to, subject, text }) {
    try {
        const details = await transporter.sendMail({
            from: process.env.GOOGLE_USER,
            to,
            subject,
            text
        });

        console.log("✅ Email sent:", details);

        return `Email successfully sent to ${to}`;

    } catch (error) {
        console.error("❌ Email sending failed:", error);

        throw error;
    }
}

    
