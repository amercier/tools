amercier/tools
==============

> My personal toolkit for web development.  
> https://tools.amercier.com

[![Build Status](https://travis-ci.org/amercier/tools.svg?branch=master)](https://travis-ci.org/amercier/tools)

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

Website https://tools.amercier.com/ is hosted on [Amazon S3][1] and served by
[Amazon CloudFront][2], as described in [this blog post][3].

Continuous deployment
---------------------

1. Each commit triggers a build on [Travis CI][4] (2 on Pull Requests commits).
Successful builds on `master` branch trigger deployment on [Amazon S3][1]
automatically.
2. Additionally, weekly builds are triggered automatically. It does not trigger
any deployment.

[1]: https://aws.amazon.com/s3/
[2]: https://aws.amazon.com/cloudfront/
[3]: https://medium.com/@willmorgan/moving-a-static-website-to-aws-s3-cloudfront-with-https-1fdd95563106
[4]: https://travis-ci.org/amercier/tools

Manual deployment
-----------------

```sh
npx yarn build
```

This creates a `build` directory containing the static files to deploy.


License
-------

[![License](https://img.shields.io/github/license/amercier/tools.svg)](LICENSE.md)
