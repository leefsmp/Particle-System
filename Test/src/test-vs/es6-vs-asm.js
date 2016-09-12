
import 'jsoneditor/dist/jsoneditor.min.css'
import DynamicTest from 'DynamicTest'
import JSONEditor from 'jsoneditor'
import './test.css'

/////////////////////////////////////////////////////////////
// On Document loaded
//
/////////////////////////////////////////////////////////////
$(document).ready( ()=> {

  /////////////////////////////////////////////////////////////
  // Sets up config editor
  //
  /////////////////////////////////////////////////////////////
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

  /////////////////////////////////////////////////////////////
  // Sets up worker
  //
  /////////////////////////////////////////////////////////////
  const refResult = (ref, res) => {

    return ref > res ?
      `Faster x ${(ref/res).toFixed(2)}` :
      `Slower x ${(res/ref).toFixed(2)}`
  }

  var worker = new Worker('../dist/worker.bundle.js')

  worker.onmessage = function(e) {

    var res1 = e.data.test1
    var res2 = e.data.test2

    var results = `
        ES6 (ms): ${res1.elapsedMs.toFixed(3)}
        <br>
        <br>
        ASM JS (ms): ${res2.elapsedMs.toFixed(3)}
        [${refResult(res1.elapsedMs, res2.elapsedMs)}]
      `

    $('.test-results').html(results)
  }

  worker.postMessage({
    msgId: 'MSG_ID_SCRIPTS',
    scripts: [
      { path: '../../Emscripten/dist/asmjs/ParticleSystem.asm.js'},
      { path: '../../ES6/dist/babel/ParticleSystem.js' }
    ]
  })

  /////////////////////////////////////////////////////////////
  // Run Test Button Clicked (Worker Mode)
  //
  /////////////////////////////////////////////////////////////
  $('#btn-test-worker').click(() => {

    $('.test-results').html('Running test, please wait ...')

    setTimeout(async()=> {

      const testConfig = editor.get()

      testConfig.test1 = 'ES6'
      testConfig.test2 = 'ASM.js'

      worker.postMessage({
        msgId: 'MSG_ID_TEST_CONFIG',
        config: testConfig
      })

    }, 100)
  })

  /////////////////////////////////////////////////////////////
  // Run Test Button Clicked (non-Worker Mode)
  //
  /////////////////////////////////////////////////////////////
  $('#btn-test').click(() => {

    $('.test-results').html('Running test, please wait ...')

    setTimeout(async()=> {

      const testConfig = editor.get()

      console.log(`--------- Running ES6 Test --------- `)

      const test1 = new DynamicTest(
        testConfig,
        Babel.ParticleSystem)

      const res1 = await test1.run()

      console.log(`--------- Running ASM Test --------- `)

      testConfig.destroy = true

      const test2 = new DynamicTest(
        testConfig,
        Module.ParticleSystem)

      const res2 = await test2.run()

      var results = `
        ES6 (ms): ${res1.elapsedMs.toFixed(3)}
        <br>
        <br>
        ASM JS (ms): ${res2.elapsedMs.toFixed(3)}
        [${refResult(res1.elapsedMs, res2.elapsedMs)}]
      `

      $('.test-results').html(results)

    }, 100)
  })
})

