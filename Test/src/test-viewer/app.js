import 'Viewing.Extension.Particle.LHC'
import 'Viewing.Extension.Particle'
import './viewer.css'


class ViewerApp {

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  initialize () {

    return new Promise((resolve, reject) => {

      Autodesk.Viewing.Initializer ({env: 'Local'}, ()=> {

        resolve()

      }, (err) => {

        reject(err)
      })
    })
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  sleep (ms) {

    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve()
      }, ms)
    })
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  async run () {

    try {

      await this.initialize()

      let domContainer = document.getElementById('viewer');

      let viewer = new Autodesk.Viewing.Private.GuiViewer3D(
        domContainer)

      viewer.initialize();

      viewer.setLightPreset(8)

      viewer.addEventListener(
        Autodesk.Viewing.GEOMETRY_LOADED_EVENT, async() => {

        viewer.setLightPreset(1)

        setTimeout(()=> {
          viewer.setLightPreset(0)
        }, 500)

        while (!Module.ParticleSystem) {

          await this.sleep(10)
        }

        for(let extensionId in Module.extensions) {

          viewer.loadExtension(
            extensionId,
            Module.extensions[extensionId])
        }
      })

      viewer.loadModel(Module.model)

    } catch(ex) {

      console.log(ex)
    }
  }
}


const App = new ViewerApp()

App.run()