// File: /api/sendBooking.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const {
        fullName, email, phone, date, time,
        location, quads, duration, specialRequests, totalPrice
    } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS, // Use App Password
        },
    });

    const htmlContent = `
        <h2>New ATV Booking Confirmation</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Quads:</strong> ${quads}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || "None"}</p>
        <p><strong>Total Price:</strong> €${totalPrice}</p>
    `;

    try {
        await transporter.sendMail({
            from: `"ATV Booking" <${process.env.GMAIL_USER}>`,
            to: 'bsncetijunior@gmail.com',
            subject: `New Booking - ${fullName}`,
            html: htmlContent
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Email sending failed' });
    }
}
