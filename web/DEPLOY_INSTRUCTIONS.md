# Production Deployment Guide for JustRed Web

Target Domain: `https://justred.io`

Since the backend is already on Firebase, the recommended hosting strategy for the Web component is **Firebase Hosting**.

## Step 1: Initialize Firebase Hosting
Run the following commands locally to configure the hosting target:

```bash
cd web
# Ensure you are logged in
firebase login
# Initialize hosting
firebase init hosting
```

**Configuration Choices:**
*   **Project**: Select `justred-project`.
*   **Public directory**: `dist` (This is where Astro builds the site).
*   **Configure as a single-page app (rewrite all urls to /index.html)?**: `No` (Astro handles routing via static generation usually, unless using an adapter).
*   **Set up automatic builds and deploys with GitHub?**: `No` (We will configure this manually in our existing workflow).

## Step 2: Generate Service Account & Permissions
To allow GitHub Actions to deploy to Firebase:
1.  Go to the [Firebase Console](https://console.firebase.google.com/project/justred-project/settings/serviceaccounts/adminsdk).
2.  Navigate to **Project Settings** > **Service accounts**.
3.  Click **Generate new private key**.
4.  Copy the content of the downloaded JSON file.

**IMPORTANT: Permissions**
Ensure the Service Account associated with this key has the following roles in Google Cloud IAM:
*   **Firebase Hosting Admin** (or at least `firebasehosting.sites.update`)
*   **Firebase Viewer** (or `firebase.projects.get`)
*   **API Enabled**: Ensure the "Firebase Management API" is enabled in the Google Cloud Console.

## Step 3: Configure GitHub Secrets
1.  Go to your GitHub Repository: `https://github.com/justred-tech/justred`.
2.  Navigate to **Settings** > **Secrets and variables** > **Actions**.
3.  Click **New repository secret**.
4.  Name: `FIREBASE_SERVICE_ACCOUNT_JUSTRED`.
5.  Value: Paste the JSON content from Step 2.

## Step 4: Update CI/CD Workflow
Modify `.github/workflows/deploy.yml` to include the deployment step.

Replace the `deploy_web` job with:

```yaml
  deploy_web:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Dependencies
        run: cd web && npm install
      - name: Build Web
        run: cd web && npm run build
      - name: Deploy to Firebase Hosting
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: "${{ secrets.GITHUB_TOKEN }}"
          firebaseServiceAccount: "${{ secrets.FIREBASE_SERVICE_ACCOUNT_JUSTRED }}"
          channelId: live
          projectId: justred-project
          entryPoint: "./web"
```

## Step 5: Configure Domain
1.  Go to **Firebase Console** > **Hosting**.
2.  Click **Add Custom Domain**.
3.  Enter `justred.io`.
4.  Follow the instructions to add the provided **A Records** to your DNS provider.
