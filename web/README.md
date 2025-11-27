# JustRed Web

This is the web application for JustRed, built with [Astro](https://astro.build).

## Development

To start the local development server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Production

The production site is hosted at `https://justred.io`.

### Build

To build the project for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Deployment

Deployment is automated via GitHub Actions. When code is pushed to the `main` branch, the site is built and deployed.

**Note**: Ensure that the `deploy_web` job in `.github/workflows/deploy.yml` is correctly configured for your hosting provider (e.g., Firebase Hosting, Vercel, Netlify). Currently, it builds the project but needs a specific deployment step added.
