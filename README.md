# A Place For now: frontend repository

run the development server with `npm start`.

build the project with `npm build`.

This boilerplate was created using [create-react-app](https://github.com/facebook/create-react-app)
and was slightly modified

Refresh on change is enabled by default, so any save on the source files will cause
the development server to refresh.

We use [prettier](https://prettier.io/), [eslint](https://eslint.org/) and
[editorconfig](https://editorconfig.org/) for development.

## Workflow

feature_branch -> develop (needs review) -> master

To use the api locally do not forget to set the api url environment variable, e.g. in linux:

`export REACT_APP_API_URL="https://a-place-for-now-268420.appspot.com/api/v1/"`
