# alanode

[![npm version](https://badge.fury.io/js/alanode.svg)](https://npmjs.org/package/alanode)

`alanode` is The Binary To Run Node.JS Files With Import And Export Statements.

```sh
yarn add -DE alanode # project-based
yarn global add alanode # user-based
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [CLI](#cli)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## CLI

The package can be run from the CLI:

```sh
$ alanode source
```

It uses [ÀLaMode](https://github.com/a-la/alamode) regex-based transpiler to change `import` and `export` statements into `require` calls and `module.export` expressions (no _Babel_). It also normalises `process.argv` to hide its presence, so that programs can safely keep using the _argv_ array without unexpected results.

_With the following file that uses an import_:

```js
import { constants } from 'os'
console.log(process.argv)
console.log(constants.signals.SIGINT)
```

_`$ alanode t` will generate the result successfully:_

```
[ '/Users/zavr/.nvm/versions/node/v8.15.0/bin/node',
  '/Users/zavr/a-la/alanode/test/fixture/t' ]
2
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## Copyright

(c) [À La Mode][1] 2019

[1]: https://alamode.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>