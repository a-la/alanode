import { resolve } from 'path'
import { debuglog } from 'util'

const LOG = debuglog('alanode')

const FIXTURE = 'test/fixture'

/**
 * A testing context for the package.
 */
export default class Context {
  async _init() {
    LOG('init context')
  }
  static get BIN() {
    return 'src/alanode'
  }
  /**
   * Example method.
   */
  example() {
    return 'OK'
  }
  /**
   * Path to the fixture file.
   */
  get FIXTURE() {
    return resolve(FIXTURE, 'test.txt')
  }
  async _destroy() {
    LOG('destroy context')
  }
}