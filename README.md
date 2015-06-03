CORS middleware for Express
===========================

Add CORS headers to server response, that allows cross-site connections

Usage
-----
    // Import
    import CORS from '@hope/cors';
    // Apply
    app.all('*', CORS());
