#!/bin/bash

# Replace YOUR_SERVICE_ACCOUNT_EMAIL with the actual email of your GitHub deployment service account
# You can find this in the service account JSON file (look for the "client_email" field)

SERVICE_ACCOUNT_EMAIL="YOUR_SERVICE_ACCOUNT_EMAIL"
PROJECT_ID="justred-project"

# Grant Service Account User role
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SERVICE_ACCOUNT_EMAIL" \
  --role="roles/iam.serviceAccountUser"

# Verify the roles
gcloud projects get-iam-policy $PROJECT_ID \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:$SERVICE_ACCOUNT_EMAIL"
