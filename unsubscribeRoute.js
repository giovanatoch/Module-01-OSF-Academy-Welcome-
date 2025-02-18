// Import necessary modules
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Example data store for subscriptions
let subscriptions = [
    { email: 'user1@example.com', subscribed: true },
    { email: 'user2@example.com', subscribed: true },
    // Add more subscribers as needed
];

// Unsubscribe route
app.post('/unsubscribe', (req, res) => {
    const { email } = req.body;

    // Find the subscription by email
    const subscription = subscriptions.find(sub => sub.email === email);

    if (!subscription) {
        return res.status(404).json({ message: 'Subscription not found.' });
    }

    // Update the subscription status
    subscription.subscribed = false;

    res.json({ message: `Unsubscribed ${email} successfully.` });
});

// Start the server
const PORT = process.env.PORT || 3000;
/**
* Logs a message indicating that the server is running on a specified port.
* The port number is defined by the constant `PORT`.
* 
* @function
* @example
* // Assuming PORT is set to 3000, the console will log:
* // "Server is running on port 3000"
*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});