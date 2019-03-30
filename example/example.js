/* yarn example/ */
import alanode from '../src'

(async () => {
  const res = await alanode({
    text: 'example',
  })
  console.log(res)
})()