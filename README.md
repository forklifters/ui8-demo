# UI8 Full-Stack Demo Project

In this project, you will build a simple note taking app using a stack similar to the one used for the UI8 application. The requirements for the app are as follows:

1. User accounts and authentication are _not_ required
1. Notes should be stored in the database
1. All notes should be listed in a sidebar in reverse chronological order (newest first)
1. Notes can be created, edited, and deleted
1. Notes can be written in plaintext or markdown format
   - If notes are markdown formatted, they should render properly when viewed

Any NPM modules may be used as needed.

## Prerequisites

Node & NPM - https://nodejs.org/en/ _(`brew` is recommended for macOS installation)_
MongoDB - https://docs.mongodb.com/manual/installation/

## Starter Code

A functioning codebase is provided to cut down on setup time. The directory structure is as follows

```
.
├── bin
├── client _Front-end code_
│ ├── scripts _AngularJS code_
│ │ ├── components
│ │ │ └── pages
│ │ ├── directives
│ │ ├── filters
│ │ └── services
│ └── stylesheets _SCSS files_
├── public _Static files (generated by gulp)_
│ ├── images
│ ├── javascripts
│ └── stylesheets
└── server _Server-side code (Express/NodeJs)_
├── controllers
├── models
├── routes
└── views
```

The client-side JavaScript and styles are compiled, concatenated, and minified by gulp. The gulp process is run by default with the `npm run dev` command.

## Getting started

Clone the repo: `git clone https://github.com/creativedash/ui8-demo.git`

Install dependencies: `npm install`

Run development server: `npm run dev`

The development environment watches for changes in both server-side and client-side code and restarts the server process and/or re-generates static files as necessary.

## Package Documentation

- [AngularJS](https://docs.angularjs.org/api)
- [UI-Router](https://ui-router.github.io/ng1/)
- [ExpressJS](http://expressjs.com/en/4x/api.html)
- [Mongoose](https://mongoosejs.com/docs/guide.html)
- [GulpJS](https://gulpjs.com/docs/en/api/concepts/)
