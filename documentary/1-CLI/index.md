## CLI

The package can be run from the CLI:

```sh
$ alanode source
```

It uses [ÀLaMode](https://github.com/a-la/alamode) regex-based transpiler to change `import` and `export` statements into `require` calls and `module.export` expressions (no _Babel_). It also normalises `process.argv` to hide its presence, so that programs can safely keep using the _argv_ array without unexpected results.

_With the following file that uses an import_:

%EXAMPLE: test/fixture/t%

_`$ alanode t` will generate the result successfully:_

%FORK src/alanode test/fixture/t%

%~%