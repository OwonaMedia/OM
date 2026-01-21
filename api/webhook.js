import { buffer } from 'micro';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    if (session.customer_email) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: session.customer_email,
        subject: 'Ihre Bestellung bei Owona Media',
        text: `Vielen Dank für Ihre Bestellung! Wir haben Ihre Zahlung erhalten. Ihre Session-ID: ${session.id}`,
        html: `<h2>Vielen Dank für Ihre Bestellung!</h2><p>Wir haben Ihre Zahlung erhalten und bearbeiten Ihre Bestellung umgehend.<br>Session-ID: <b>${session.id}</b></p>`
      });
    }
  }
  res.json({ received: true });
}
