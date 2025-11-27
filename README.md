# JustRed Project

This is a monorepo containing the source code for the JustRed platform.

## Structure

*   **web/**: The main website built with Astro.
*   **extension/**: Chrome extension (Vanilla JS).
*   **backend/**:
    *   **functions/**: Firebase Cloud Functions.
    *   **nginx/**: Nginx configuration for Cloud Run.

## Production Setup

The production domain is `justred.io`.

### Prerequisites
1.  **Firebase Project**: Ensure you have access to the `justred` Firebase project.
2.  **Google Cloud**: Ensure you have access to the GCP project associated with Firebase.
3.  **GitHub Secrets**: The following secrets must be configured in the repo:
    *   `FIREBASE_TOKEN`: For deploying Firebase Functions.
    *   `GCP_SA_KEY`: Service Account key for deploying to Cloud Run.

### Deployment
Deployment is handled via GitHub Actions. Pushing to the `main` branch triggers the deployment workflow.

Currently, only the **Web** component is active in the CI/CD pipeline. The Backend and Nginx deployments are temporarily disabled.
