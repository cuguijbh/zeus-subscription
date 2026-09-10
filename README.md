# ZEUS Subscription for Railway

## Deploy
1. Upload this project to a GitHub repository.
2. In Railway, create a new project and deploy the GitHub repository.
3. Railway will detect Node.js and run `npm start`.
4. Generate a public Railway domain from the service's Networking/Domain settings.

## Subscription URL
After deployment, use:

https://YOUR-RAILWAY-DOMAIN/sub

The `/subscription` endpoint serves the same Base64 subscription.

## Notes
- The app listens on Railway's PORT environment variable.
- The subscription contains the 10 VLESS entries supplied for this project.
