import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Stripe from "stripe";
dotenv.config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error("Stripe secret key is not set in the environment variables");
  process.exit(1); // Exit the process with an error code
}

const stripe = Stripe(stripeSecretKey);
const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  const line_items = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        images: [product.image], // Ensure you have 'image' field in your product object
      },
      unit_amount: product.price * 100, // Stripe expects amount in cents
    },
    quantity: product.qty,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173", // Replace with your success URL
      cancel_url: "http://localhost:5173", // Replace with your cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(`Error creating checkout session: ${error.message}`);
    res
      .status(500)
      .json({ error: `Error creating checkout session: ${error.message}` });
  }
});

app.listen(3001, () => console.log("Server is running on port 3001"));
