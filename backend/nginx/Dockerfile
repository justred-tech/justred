FROM nginx:alpine

COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Environment variables to be substituted
ENV PORT=8080
ENV BACKEND_URL=http://localhost:5001/justred/us-central1/getRandomNumber

# Nginx image automatically runs envsubst on files in /etc/nginx/templates/ 
# and outputs to /etc/nginx/conf.d/
