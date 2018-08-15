export interface ServerInfo {
    config: Configuration
    initializedDate: Date
    goVersion: string
}

export interface SetupConfiguration {
	initialAdmin: string
}

export interface Configuration {
	webServer: WebServerConfiguration
	setup: SetupConfiguration
	database: DatabaseConfiguration
}

export interface WebServerConfiguration {
    protocol: string
    host: string
    port: string
    baseURL: string
    uiProxyPort: string
}

export interface DatabaseConfiguration {
	dataDir: string
}