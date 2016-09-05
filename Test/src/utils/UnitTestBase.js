/**
 * Created by leefsmp on 26/07/16.
 */
import EventsEmitter from 'EventsEmitter'
import Stopwatch from 'Stopwatch'

export default class UnitTestBase extends EventsEmitter {

  constructor(config) {

    super()

    this.stopwatch = new Stopwatch()

    this.config = config
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  initialize (config) {

    throw new Error('Unimplemented method initialize')
  }

  doTest (config) {

    throw new Error('Unimplemented method doTest')
  }

  finalize (config) {

    throw new Error('Unimplemented method finalize')
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  run () {

    return new Promise(async(resolve, reject) => {

      await this.initialize(this.config)

      this.stopwatch.start()

      var result = await this.doTest(this.config)

      const elapsedMs = this.stopwatch.getElapsedMs()

      this.finalize(this.config)

      resolve ({
        elapsedMs
      })
    })
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  static sleep (ms) {

    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve()
      }, ms)
    })
  }
}