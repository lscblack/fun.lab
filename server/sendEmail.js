import nodemailer from 'nodemailer';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'l.christian@alustudent.com',
        pass: 'chriss@chriss@123'
    }
});

// Send email
const sendEmail = async () => {
    try {
        const info = await transporter.sendMail({
            from: 'l.christian@alustudent.com',
            to: 'sauverloue2@gmail.com',
            subject: 'Test Email',
            text: 'This is a test email from Node.js and Nodemailer.'
        });
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

sendEmail(); // Invoke the function to send the email
