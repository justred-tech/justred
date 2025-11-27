# Production Deployment Guide for Nginx (Cloud Run)

Target Service: Google Cloud Run
Project ID: `justred-project`
Region: `us-central1`

## Prerequisites
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed and authenticated.
- Docker installed.

## Step 1: Manual Deployment
Run these commands from the root of the repository.

1. **Authenticate with Google Cloud:**
   ```bash
   gcloud auth login
   gcloud config set project justred-project
   ```

2. **Enable required services:**
   ```bash
   gcloud services enable cloudbuild.googleapis.com run.googleapis.com containerregistry.googleapis.com
   ```

3. **Build and Submit the Image:**
   We use Google Cloud Build to build the image and store it in Google Container Registry (GCR).
   ```bash
   gcloud builds submit backend/nginx --tag gcr.io/justred-project/nginx
   ```

4. **Deploy to Cloud Run:**
   Replace `[YOUR_BACKEND_URL]` with the actual URL of your deployed Firebase Function (e.g., `https://us-central1-justred-project.cloudfunctions.net/getRandomNumber`).
   ```bash
   gcloud run deploy nginx \
     --image gcr.io/justred-project/nginx \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --set-env-vars BACKEND_URL=[YOUR_BACKEND_URL]
   ```

## Step 2: Configure CI/CD (GitHub Actions)

### 1. Create a Service Account
1. Go to **IAM & Admin** > **Service Accounts** in Google Cloud Console.
2. Create a new service account (e.g., `github-deployor`).
3. Grant the following roles:
   - **Cloud Run Admin**
   - **Storage Admin** (for GCR)
   - **Service Account User**
4. Create a JSON key for this account and download it.

### 2. Add GitHub Secret
1. Go to your GitHub Repo > **Settings** > **Secrets and variables** > **Actions**.
2. Add a new secret:
   - Name: `GCP_SA_KEY`
   - Value: Paste the content of the JSON key file.

### 3. Update Workflow
Uncomment and update the `deploy_nginx` job in `.github/workflows/deploy.yml`:

```yaml
  deploy_nginx:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Authenticate to Google Cloud
        uses: google-github-actions/auth@v1
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY }}
      - name: Build and Push Docker Image
        run: |
          gcloud builds submit backend/nginx --tag gcr.io/justred-project/nginx
      - name: Deploy to Cloud Run
        run: |
          gcloud run deploy nginx \
            --image gcr.io/justred-project/nginx \
            --platform managed \
            --region us-central1 \
            --allow-unauthenticated \
            --set-env-vars BACKEND_URL=https://us-central1-justred-project.cloudfunctions.net/getRandomNumber
```
