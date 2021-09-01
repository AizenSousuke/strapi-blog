# Next + Strapi Blog

Following tutorial from [https://strapi.io/blog/build-a-blog-with-next-react-js-strapi](https://strapi.io/blog/build-a-blog-with-next-react-js-strapi)

## Getting started
```
cd backend
yarn develop
cd ..
cd frontend
yarn dev
```

Go to http://localhost:3000 in any browser

### Strapi url
[http://localhost:1337/admin](http://localhost:1337/admin)

### Accounts to use
```
admin@admin.com
P@ssw0rd
```

### Deploy to heroku
```
https://dev.to/dibasdauliya/nextjs-blog-with-strapi-deploy-to-heroku-and-vercel-48e
```

### Buildpacks to use in Heroku
```
https://github.com/timanovsky/subdir-heroku-buildpack
heroku/nodejs
```

### Config values to put in Heroku
DATABASE_URL = Get your DB url from its postgres sql addon

HEROKU_URL = your app url

NEXT_PUBLIC_STRAPI_API_URL = your app url

NODE_ENV = production

PROJECT_PATH = your strapi root folder i.e, backend

