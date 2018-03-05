amercier/tools
==============

> My personal toolkit for web development.  
> http://tools.amercier.com

[![Build Status](https://img.shields.io/travis/amercier/tools/master.svg)](https://travis-ci.org/amercier/tools)

Development
===========

This project is developped using [React](https://reactjs.org/).

Setup
-----

1. Requirements: [Node.js](https://nodejs.org/en/) (latest) and [Yarn](https://yarnpkg.com/en/).
2. Clone this repository: `git clone {REPOSITORY URL}`
3. Install dependencies:
```sh
npx yarn install
```

Run
---

```sh
npx yarn start
```

Test
----

```sh
npx yarn tests
```

Deployment
==========

Continuous deployment
---------------------

1. Each commit triggers a build on [Travis CI][1] (2 on Pull Requests commits).
Successful builds on `master` branch trigger deployment on [Github Pages][2]
automatically.
2. Additionally, weekly builds are triggered automatically. It does not trigger
any deployment.

**Note:** a valid [GitHub personal access token][3] must be created with the
`public_repo` permission, and stored in Travis CI project settings as an
[environment variable][4] called `GITHUB_TOKEN` (see `.travis.yml` for details).

[1]: https://travis-ci.org/amercier/tools
[2]: https://pages.github.com/
[3]: https://github.com/settings/tokens
[4]: https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings

Manual deployment
-----------------

```sh
npx yarn build
```

This creates a `build` directory containing the static files to deploy.
