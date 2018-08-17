export interface ServerInfo {
    config: Configuration
    initializedDate: Date
    goVersion: string
}

export interface SetupConfiguration {
	initialAdmin: string
}

export interface AuthConfiguration {
    google: AuthProvider
}

export interface AuthProvider {
    ClientID: string
    ClientSecret: string
    Endpoint: {
        AuthURL: string,
        TokenURL: string
    }
    RedirectURL: string
    Scopes: string[]
}

export interface Configuration {
    auth: AuthConfiguration
	database: DatabaseConfiguration
	setup: SetupConfiguration
	webServer: WebServerConfiguration
}

export interface WebServerConfiguration {
    protocol: string
    host: string
    port: string
    baseURL: string
    uiProxyPort: string
    contentRoot: string
}

export interface DatabaseConfiguration {
	dataDir: string
}