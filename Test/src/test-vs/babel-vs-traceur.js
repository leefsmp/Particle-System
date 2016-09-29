
// Unit Tests
import DynamicTest from 'DynamicTest'

// Libs
import JSONEditor from 'jsoneditor'

// styles
import 'jsoneditor/dist/jsoneditor.min.css'
import './test.css'


/////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////
$(document).ready( ()=> {

  var editor = new JSONEditor($('.test-config')[ 0 ], {
    search: false
  })

  var defaultTestConfig = {
    dumpParticles: false,
    maxParticles: 1000,
    timeStep: 0.1,
    nbSteps: 5000,
    emitters: [ {
      id: 0,
      position: {
        x: 0,
        y: 0,
        z: 0
      },
      emissionRate: 4000,
      velocity: 100,
      spread: 0.1,
      charge: 100
    } ],

    fields: [ {
      id: 1,
      position: {
        x: 200,
        y: 20,
        z: 0
      },
      force: -2500
    }, {
      id: 2,
      position: {
        x: 200,
        y: -20,
        z: 0
      },
      force: -500
    } ]
  }

  editor.set(defaultTestConfig)

  const refResult = (ref, res) => {

    return ref > res ?
      `Faster x ${(ref/res).toFixed(2)}` :
      `Slower x ${(res/ref).toFixed(2)}`
  }

  $('.test-btn').click(() => {

    $('.test-results').html(
      'Running test, please wait ...')

    setTimeout(async()=> {

      const testConfig = editor.get()


      console.log('--------- Running ES6 Babel Test --------- ')

      const test1 = new DynamicTest(
        testConfig,
        Babel.ParticleSystem)

      const res1 = await test1.run()


      console.log('--------- Running ES6 Traceur Test --------- ')


      const test2 = new DynamicTest(
        testConfig,
        Traceur.ParticleSystem)

      const res2 = await test2.run()


      var results = `
        Babel (ms): ${res1.elapsedMs.toFixed(3)}
        <br>
        <br>
        Traceur (ms): ${res2.elapsedMs.toFixed(3)}
        [${refResult(res1.elapsedMs, res2.elapsedMs)}]
      `

      $('.test-results').html(results)

    }, 100)

  })
})

