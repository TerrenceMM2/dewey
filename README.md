<p align="center"><img width=12.5% src="./docs/dir_assets/avatar.png"></p>
<p align="center"><img width=50% src="./docs/dir_assets/title.png"></p>

<div align="center">
<img src="https://img.shields.io/website?label=AWS%20Deployment&logo=amazon-aws&style=for-the-badge&url=http%3A%2F%2Fbooktracker-env.eba-vxhiqmya.us-east-2.elasticbeanstalk.com%2F" />
<img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" />
<img src="https://img.shields.io/badge/version-v0.0.1.alpha-blue?style=for-the-badge" />
<img src="https://img.shields.io/github/issues/terrencemm2/dewey?label=issues&logo=github&style=for-the-badge" />
<img src="https://img.shields.io/npm/v/npm?style=for-the-badge" />
<img src="https://img.shields.io/github/v/release/terrencemm2/dewey?style=for-the-badge" />
<img src="https://img.shields.io/github/last-commit/terrencemm2/dewey?style=for-the-badge" />
</div>

<h3 align="center">
🚧 Under Construction 🚧
</div>

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

1.

-   **Option 1**: 🍴 Fork the repository
-   **Option 2**: 👯 Clone the repo with `git clone git@github.com:acd37/dewey.git`

2. 🤫 Create a `.env` file in the root directory, and include the following information:

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
4. Launch the app using `npm run dev` and hack away 🔨🔨🔨
5. 🔃 Create a pull request.

# Contributing

To contribute to this code, initialize a pull request against the `master` branch with any changes you would like to implement.

A member of our development team will review, request changes as needed, and approve if deemed appropriate.

# 🚨 Disclaimer 🚨

You assume full risk by using our code, and are reponsible for securing your own API keys, where applicable.

### Developers

<table >
    <tr >
        <td align="center" style="border: none">
            <a href="https://petewanca.github.io/" /><img src="https://avatars1.githubusercontent.com/u/31027058?s=460&u=ae1d74cd39ed8c7a9c1698bfae9022d39c35b35c&v=4" width="100px;" style="border-radius: 50%" alt="petewanca"/></a>
            <br/>
            <a href="https://github.com/petewanca"><strong>@petewanca</strong></a>
            <br />
            <a href="https://www.linkedin.com/in/petewanca/"><img src="./docs/dir_assets/linkedin.png" height="20"></a>
        </td>
        <td align="center">
            <a href="https://terrence.codes" /><img src="https://avatars0.githubusercontent.com/u/25600473?s=460&u=594f9b2404f45bd471ed335d11136f23f6a98460&v=4" width="100px;" style="border-radius: 50%" alt="terrencemm2"/></a>
             <br/>
            <a href="https://github.com/terrencemm2"><strong>@terrencemm2</strong></a>
             <br />
            <a href="https://www.linkedin.com/in/terrencemahnken/"><img src="./docs/dir_assets/linkedin.png" height="20"></a>
        </td>
        <td align="center">
            <a href="https://alecdown.com" /><img src="https://avatars0.githubusercontent.com/u/25551773?s=460&u=137fc38ea522b4647308b9435c01b119d601d08a&v=4" width="100px;" style="border-radius: 50%" alt="acd37"/></a>
             <br/>
            <a href="https://github.com/acd37"><strong>@acd37</strong></a>
             <br />
            <a href="https://linkedin.com/in/alecdown"><img src="./docs/dir_assets/linkedin.png" height="20"></a>
        </td>
    </tr>
</table>
