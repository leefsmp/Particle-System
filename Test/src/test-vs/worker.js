
import DynamicTest from 'DynamicTest'

/////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////
onmessage = (e) => {

  switch(e.data.msgId) {

    case 'MSG_ID_SCRIPTS':

      e.data.scripts.forEach((scriptInfo) => {

        if (scriptInfo.wasm) {

          loadWASM(scriptInfo.wasmPath, scriptInfo.wasmName)

        } else {

          importScripts(scriptInfo.path)
        }
      })

      break

    case 'MSG_ID_TEST_CONFIG':

      runTest(e.data.config)

      break
  }
}

/////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////
async function runTest (testConfig) {

  console.log(`--------- Running ${testConfig.test1} Test --------- `)

  const test1 = new DynamicTest(
    testConfig,
    Babel.ParticleSystem)

  const res1 = await test1.run()

  console.log(`--------- Running ${testConfig.test2} Test --------- `)

  testConfig.destroy = true

  const test2 = new DynamicTest(
    testConfig,
    Module.ParticleSystem)

  const res2 = await test2.run()

  postMessage({
    test1: res1,
    test2: res2
  })
}

/////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////
function loadWASM (wasmPath, wasmName) {

  self.Module = {}

  //'WEB' / 'WORKER' / 'NODE' / 'SHELL'
  self.Module['ENVIRONMENT'] = 'WORKER'

  self.Module.wasmBinaryFile = `${wasmPath}/${wasmName}.wasm`

  self.Module.memoryInitializerPrefixURL = wasmPath

  var xhr = new XMLHttpRequest()
  xhr.open('GET', `${wasmPath}/${wasmName}.wasm`, true)
  xhr.responseType = 'arraybuffer'

  xhr.onload = function() {

    self.Module.wasmBinary = xhr.response

    importScripts(`${wasmPath}/${wasmName}.js`)
  }

  xhr.send(null)
}