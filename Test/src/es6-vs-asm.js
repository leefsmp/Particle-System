
// Unit Tests
import ASMTest from  './UnitTests/ASM.Test'
import ES6Test from  './UnitTests/ES6.Test'

// Libs
import JSONEditor from 'jsoneditor'

// styles
import 'jsoneditor/dist/jsoneditor.min.css'
import 'styles/test.css'


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
      emissionRate: 150,
      velocity: 50,
      spread: 0.1,
      charge: -1
    } ],

    fields: [ {
      id: 1,
      position: {
        x: 10,
        y: 0,
        z: 0
      },
      force: 10
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


      console.log('--------- Running ES6 Test --------- ')

      const test1 = new ES6Test(testConfig)

      const res1 = await test1.run()


      console.log('--------- Running ASM.js Test --------- ')

      const test2 = new ASMTest(testConfig)

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

