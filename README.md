# subgraph-ubi-management

:warning: This repository was merged with *subgraph* here https://github.com/impactMarket/subgraph/pull/89 and is no longer maintained!

## Test
In order to test, you need matchstick. You can use docker or the binary

### With docker

Follow https://github.com/LimeChain/matchstick#quick-start-

The first time you need to build the docker image (with `$ docker build -t matchstick .`). From that onwards, it's only necessary if you change dependencies versions.

```
$ docker run -it --rm --mount type=bind,source=<absolute/path/to/project>,target=/matchstick matchstick
```

## Deploy
```
$ yarn prepare:alfajores # or mainnet
$ yarn codegen
$ yarn build
$ yarn deploy:alfajores # or mainnet
```
