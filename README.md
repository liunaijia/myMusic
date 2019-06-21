# My Music

This small tool helps to search and download songs from a playlist, then trim mp3 tags including album cover image.

## Development
```
npm run dev:api
```

The command starts webpack to watch files changes and runs AWS SAM locally.

## Deployment

### Deploy API to AWS

```
npm run deploy:api
```

It runs following steps.

* Step 1: Clean files in output folder `./aws-sam`.

   `deploy:api:clean-build`

* Step 2: Bundle source files and output to `.aws-sam/build` folder.

   `deploy:api:build`
   
* Step 3: Build SAM template file `.aws-sam/template.yaml` and upload packages to S3

   `deploy:api:upload-package`

* Step 4: Deploy stack

   `deploy:api:deploy-stack`