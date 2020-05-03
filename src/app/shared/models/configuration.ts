export interface Configuration {
  auth: AuthConfiguration;
  database: DatabaseConfiguration;
  setup: SetupConfiguration;
  webServer: WebServerConfiguration;
}

export interface SetupConfiguration {
  initialAdmin: string;
}

export interface AuthConfiguration {
  google: AuthProvider;
}

export interface AuthProvider {
  ClientID: string;
  ClientSecret: string;
  Endpoint: {
      AuthURL: string,
      TokenURL: string
  };
  RedirectURL: string;
  Scopes: string[];
}

export interface WebServerConfiguration {
  protocol: string;
  host: string;
  port: string;
  uiProxyPort: string;
  contentRoot: string;
}

export interface DatabaseConfiguration {
  dataDir: string;
}
