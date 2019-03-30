import makeTestSuite from '@zoroaster/mask'
import Context from '../context'

export default
makeTestSuite('test/result', {
  fork: {
    module: Context.BIN,
    preprocess: {
      stdout(stdout) {
        return stdout.replace(`node/${process.version}/bin/node`,
          `node/v8.15.0/bin/node`)
      },
    },
  },
})