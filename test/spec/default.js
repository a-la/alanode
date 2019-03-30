import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import alanode from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof alanode, 'function')
  },
  async 'calls package without error'() {
    await alanode()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await alanode({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

// export default T