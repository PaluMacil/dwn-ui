const PROXY_CONFIG = [
    {
        context: [
            "/oauth",
            "/api",
            "/test"
        ],
        target: "http://localhost:3035",
        secure: false
    }
]

module.exports = PROXY_CONFIG;