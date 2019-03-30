import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import alanode from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await alanode({
      text: input,
    })
    return res
  },
  context: Context,
})