export interface ServerInfo {
    protocol: string
    host: string
    port: string
    baseURL: string
    uiProxyPort: string
    valueLogUseMMAP: boolean
    setup: { initialAdmin: string }
    initializedDate: Date
    goVersion: string
}