CORS middleware for Express
===========================
![Test passing](https://travis-ci.org/HopeUA/cors.module.svg?branch=master)
Add CORS headers to server response, that allows cross-site connections

Usage
-----
    // Import
    import CORS from '@hope/cors';
    // Apply
    app.all('*', CORS());
