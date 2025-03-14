// middleware/apiKeyMiddleware.js
// The apiKeyMiddleware.js file contains the middleware function that checks the API key in the request headers.
// The middleware function checks if the API key in the request headers matches the API key stored in the environment variables.
const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
module.exports = apiKeyMiddleware;