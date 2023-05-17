# Dwn Ui

This project was the frontend for DWN. It's no longer in use.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Make sure you let the backend know that there is a UI proxy so that it tells the correct redirect url to the OpenID provider.

## Build

Run `ng build` to build the project for prod.

## Troubleshooting

- esbuild wasn't listed but an error was showing it as broken, so I added it to dev deps. Not sure where it came from before that.
- The proxy or some other tool seems to use a deprecated cipher for https, so before upgrading, try something like `NODE_OPTIONS=--openssl-legacy-provider ng serve`. `ng build` will need this option too for now.