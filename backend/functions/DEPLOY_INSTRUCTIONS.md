# Production Deployment Guide for Cloud Functions

Target Service: Firebase Cloud Functions
Project ID: `justred-project`
Region: `us-central1` (default)

## Prerequisites
- [Firebase CLI](https://firebase.google.com/docs/cli) installed and authenticated.
- Node.js installed.

## Step 1: Manual Deployment
Run these commands from the root of the repository.

1. **Login to Firebase:**
   ```bash
   firebase login
   ```

2. **Deploy Functions:**
   This command builds the TypeScript code and deploys it to Firebase.
   ```bash
   firebase deploy --only functions
   ```

   *Note: The `predeploy` hook in `firebase.json` automatically runs `npm run build` inside `backend/functions`.*

## Step 2: Configure CI/CD (GitHub Actions)

### 1. Credentials
We use the same Service Account as the Web deployment (`FIREBASE_SERVICE_ACCOUNT_JUSTRED`).

**Required Roles:**
- **Cloud Functions Admin**
- **Service Account User**
- **Firebase Admin**

### 2. Workflow Configuration
The workflow is already configured in `.github/workflows/deploy-backend.yml`.

It will automatically deploy when changes are pushed to `backend/**` on the `main` branch.

**Key points:**
- Uses Node.js 22
- Authenticates with Google Cloud using service account JSON
- Installs Firebase CLI globally
- Deploys only functions to `justred-project`
