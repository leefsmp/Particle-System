
import 'jsoneditor/dist/jsoneditor.min.css'
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
        WASM (ms): ${res2.elapsedMs.toFixed(3)}
        [${refResult(res1.elapsedMs, res2.elapsedMs)}]
      `

    $('.test-results').html(results)
  }

  worker.postMessage({
    msgId: 'MSG_ID_SCRIPTS',
    scripts: [
      {
        wasmPath: '../../Emscripten/dist/wasm/',
        wasmName:'ParticleSystem',
        wasm: true
      },
      {
        path: '../../ES6/dist/babel/ParticleSystem.js'
      }
    ]
  })

  /////////////////////////////////////////////////////////////
  // Run Test Button Clicked
  //
  /////////////////////////////////////////////////////////////
  $('.test-btn').click(() => {

    $('.test-results').html('Running test, please wait ...')

    setTimeout(async()=> {

      const testConfig = editor.get()

      testConfig.test1 = 'ES6'
      testConfig.test2 = 'WASM'

      worker.postMessage({
        msgId: 'MSG_ID_TEST_CONFIG',
        config: testConfig
      })

    }, 100)
  })
})

