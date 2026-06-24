import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.web.de',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req) {
    try {
        // debug — check if env vars are loading
        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

        const body = await req.json();
        const { fullName, phone, email, message, type, preferredDate, preferredTime, duration } = body;

        const isSpecific = type && type !== 'general';

        const html = `
            <div style="font-family: serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e5e5; border-radius: 8px;">
                <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 4px;">Neue Anfrage — Gasthaus zur Börse</h2>
                <p style="color: #888; font-size: 14px; margin-bottom: 24px; border-bottom: 1px solid #e5e5e5; padding-bottom: 16px;">
                    ${isSpecific ? `Anfrage für: <strong>${type}</strong>` : 'Allgemeine Kontaktanfrage'}
                </p>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; color: #555; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${fullName}</td></tr>
                    <tr><td style="padding: 8px 0; color: #555;">Telefon</td><td style="padding: 8px 0; font-weight: bold;">${phone}</td></tr>
                    ${email ? `<tr><td style="padding: 8px 0; color: #555;">E-Mail</td><td style="padding: 8px 0; font-weight: bold;">${email}</td></tr>` : ''}
                    ${isSpecific ? `
                    <tr><td style="padding: 8px 0; color: #555;">Wunschdatum</td><td style="padding: 8px 0; font-weight: bold;">${preferredDate || '—'}</td></tr>
                    <tr><td style="padding: 8px 0; color: #555;">Uhrzeit</td><td style="padding: 8px 0; font-weight: bold;">${preferredTime || '—'}</td></tr>
                    <tr><td style="padding: 8px 0; color: #555;">Dauer</td><td style="padding: 8px 0; font-weight: bold;">${duration || '—'}</td></tr>
                    ` : ''}
                    ${message ? `<tr><td style="padding: 8px 0; color: #555; vertical-align: top;">Nachricht</td><td style="padding: 8px 0;">${message}</td></tr>` : ''}
                </table>
            </div>
        `;

        await transporter.sendMail({
            from: `"Gasthaus zur Börse Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: isSpecific
                ? `Neue ${type} Anfrage von ${fullName}`
                : `Neue Kontaktanfrage von ${fullName}`,
            html,
        });

        return Response.json({ success: true });

    } catch (err) {
        // this prints the real error in your terminal
        console.error('MAIL ERROR:', err.message);
        return Response.json({ success: false, error: err.message }, { status: 500 });
    }
}