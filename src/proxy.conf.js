const PROXY_CONFIG = [
    {
        context: [
            "/oauth",
            "/api",
            "/test",
            "/s/"
        ],
        target: "http://localhost:3035",
        secure: false
    }
];

module.exports = PROXY_CONFIG;
