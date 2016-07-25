import EmscriptenTest from './Emscripten.Test'
import 'jsoneditor.min.css'
import JSONEditor from 'jsoneditor'
import ES6Test from  './ES6.Test'
import Stopwatch from 'Stopwatch'
import 'test.css'

var stopWatch = new Stopwatch()

/////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////
var runEmscriptenTest = function (testConfig) {

  stopWatch.start()

  var ps = EmscriptenTest.initParticleSystem(testConfig)

  if(testConfig.dumpParticles) {

    for(var i = 0; i < testConfig.nbSteps; ++i) {
      console.log('-------- Step ' + (i + 1) + ' --------')
      ps.step(testConfig.timeStep)
      EmscriptenTest.dumpParticles(ps)
    }

  } else {

    for(var i = 0; i < testConfig.nbSteps; ++i) {
      ps.step(testConfig.timeStep)
    }
  }

  var elapsed = stopWatch.getElapsedMs()

  Module.destroy(ps)

  return elapsed
}

/////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////
var runES6Test = function (testConfig) {

  stopWatch.start()

  var ps = ES6Test.initParticleSystem(testConfig)

  if(testConfig.dumpParticles) {

    for(var i = 0; i < testConfig.nbSteps; ++i) {
      console.log('-------- Step ' + (i + 1) + ' --------')
      ps.step(testConfig.timeStep)
      ES6Test.dumpParticles(ps)
    }

  } else {

    for(var i = 0; i < testConfig.nbSteps; ++i) {
      ps.step(testConfig.timeStep)
    }
  }

  var elapsed = stopWatch.getElapsedMs()

  return elapsed
}

/////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////
var editor = new JSONEditor($('.test-config')[0], {
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

$('.test-btn').click(() => {

  $('.test-results').html(
    'Running test, please wait ...')

  setTimeout(()=>{

    var testConfig = editor.get()

    var results = [
      runES6Test(testConfig),
      runEmscriptenTest(testConfig)
    ]

    var results = `
    ES6 (ms): ${results[0].toFixed(3)}
    <br>
    <br>
    Emscripten (ms): ${results[1].toFixed(3)}
    [x ${(results[0]/results[1]).toFixed(2)}]
  `

    $('.test-results').html(results)
  }, 100)

})


