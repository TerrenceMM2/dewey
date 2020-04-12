# Book Tracker

![Website](https://img.shields.io/website?label=AWS%20Deployment&logo=amazon-aws&style=for-the-badge&url=http%3A%2F%2Fbooktracker-env.eba-vxhiqmya.us-east-2.elasticbeanstalk.com%2F)
![license](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![version](https://img.shields.io/badge/version-v0.0.1.alpha-blue?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/acd37/dewey?label=issues&logo=github&style=for-the-badge)

### 🚧 Under Construction 🚧

<hr />

# Live Link

http://booktracker-env.eba-vxhiqmya.us-east-2.elasticbeanstalk.com/

# About

_Dewey is a personal library application that allows you to keep track of all books in your collection, add new books by searching via keyword, author or title, as well as scan the bar code of any book using your device's camera._

# The Tech Stuff

**Deployment**: AWS CodeBuild, AWS CodePipeline, AWS Elastic Beanstalk

**Server**: Node.js, Express, MySQL, Passport.js

**Client**: React.js with Hooks & Context

# How to Use

To use this code, you'll need to have `nodemon` installed globally. Documentation is available at [npmjs.com](https://www.npmjs.com/package/nodemon).

Once you have this available:

1. `git clone <repository>` to download the code.
2. Create a `.env` file in the root directory, and include the following information:

```
# DEV CREDENTIALS
DB_DEV_USERNAME=
DB_DEV_PASSWORD=
DB_DEV_HOST=localhost
DB_DEV_DATABASE=dewey_dev
DB_DEV_PORT=3306

# PRODUCTION CREDENTIALS
DB_PROD_USERNAME=
DB_PROD_PASSWORD=
DB_PROD_HOST=m
DB_PROD_DATABASE=dewey_prod
DB_PROD_PORT=3306

# SECRET
SECRET_KEY=
```

You will need your own instance of a local and production MySQL database. Any `SECRET_KEY` will be fine. We encourage strong keys.

2. `cd` into the directory, and `npm install` all server-side packages
3. `npm run client-install` to install all client-side packages
4. Launch the app using `npm run dev`.

# Contributing

To contribute to this code, initialize a pull request against the `master` branch with any changes you would like to implement.

A member of our development team will review, request changes as needed, and approve if deemed appropriate.

### Developers

#### 👨‍💻 Pete Wanca, [@petewanca](https://github.com/petewanca)

-   Homepage: [petewanca.github.io](https://petewanca.github.io/)
-   e-mail: petewanca@gmail.com
-   LinkedIn: [linkedin.com/in/petewanca](https://www.linkedin.com/in/petewanca/)

#### 👨‍💻 Terrence Mahnken, [@terrencemm2](https://github.com/TerrenceMM2)

-   Homepage: [terrence.codes](https://terrence.codes)
-   e-mail: terrencemm2@gmail.com
-   LinkedIn: [linkedin.com/in/terrencemahnken](https://www.linkedin.com/in/terrencemahnken/)

#### 👨‍💻 Alec Down, [@acd37](https://github.com/acd37)

-   Homepage: [alecdown.com](https://alecdown.com)
-   e-mail: alecdown@gmail.com
-   LinkedIn: [https://www.linkedin.com/in/alecdown/](linkedin.com/in/alecdown)
