// Express-Server für Stripe Checkout
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
require('dotenv').config();


const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51SQZoXEBCNGNWfiqxicxifwDiJuv00plpqI5lrHikE71VLnGJN2EtorqDzV54XjpCD6AX2CcWlCFn4YMv6RXsZVC00frC019qk');

app.use(cors({ origin: true }));
app.use(express.json({ verify: (req, res, buf) => { req.rawBody = buf; } }));
// Stripe Webhook für Bestellbestätigung, Fulfillment, Admin
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET || 'whsec_jCwvAuy7tcmuVeRlQQica37xNgeBaXvB');
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // TODO: Fulfillment, E-Mail, Admin-Logik hier einbauen
    console.log('✅ Payment received for session:', session.id, session.customer_email);
  }
  res.json({ received: true });
});

app.post('/create-checkout-session', async (req, res) => {
  const { items, customer } = req.body;
  if (!items || !Array.isArray(items)) return res.status(400).json({ error: 'No items' });

  try {
    const line_items = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.title,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      customer_email: customer?.email,
      success_url: `${req.headers.origin}/checkout?success=true`,
      cancel_url: `${req.headers.origin}/checkout?canceled=true`,
    });
    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log('Stripe server running on port', PORT));
