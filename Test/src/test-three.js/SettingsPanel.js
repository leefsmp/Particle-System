
import GUIObjectAdapter from 'GUIObjectAdapter'
import DockingPanel from 'DockingPanel'
import dat from 'dat-gui'

export default class SettingsPanel extends DockingPanel {

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  constructor (domContainer, particleSystem) {
    
    super(domContainer, 'Particle Controls', {
      closable: false
    })

    this.particleSystem = particleSystem

    $(this.container).addClass('particle')
    $(this.container).addClass('settings')

    var gui = new dat.GUI({
      autoPlace: false
    })

    var guiContainer = document.getElementById(
      this.container.id + '-gui')

    guiContainer.appendChild(
      gui.domElement)

    var folder = gui.addFolder('Particle System Settings')

    this.particleSytemGUI = new GUIObjectAdapter(
      particleSystem, {
        maxParticles: {
          getter: 'getMaxParticles',
          setter: 'setMaxParticles'
        }
    })

    this.maxParticleCtrl = folder.add(
      this.particleSytemGUI,
      'maxParticles', 0, 1000000).name(
        'Max Particles').step(1)

    this.maxParticleCtrl.onFinishChange((value) => {

      try {

        this.particleSytemGUI.update()

      } catch (ex) {

      }

      this.emit('maxParticles.changed', value)
    })

    folder.open()

    setTimeout(() => {
      gui.domElement.style.width = '100%'
    }, 0)
  }
  
  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  htmlContent (id) {
    
    return `
     <div class="container">
          <div id="${id}-gui">
          </div>
      </div>`
  }

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  loadObjectGUI (obj) {

    $('#' + this.container.id + '-obj-gui').remove()

    if (!obj || !obj.getSelectable()) {
      return
    }

    var gui = new dat.GUI({
      autoPlace: false
    })

    $('#' + this.container.id + '-gui').append(
      `<div id="${this.container.id}-obj-gui"></div>`
    )

    var guiContainer = document.getElementById(
      this.container.id + '-obj-gui')

    guiContainer.appendChild(
      gui.domElement)

    switch (obj.getType()) {

      case 0:

        this.selectedObjectGUI = new GUIObjectAdapter(
          this.particleSystem.getEmitter(obj.getId()), {
            emissionRate: {
              getter: 'getEmissionRate',
              setter: 'setEmissionRate'
            },
            spread: {
              getter: 'getSpread',
              setter: 'setSpread'
            },
            velocity: {
              getter: 'getVelocity',
              setter: 'setVelocity'
            },
            charge: {
              getter: 'getCharge',
              setter: 'setCharge'
            }
          })

        var emitterFolder = gui.addFolder(
          'Emitter Settings')

        emitterFolder.add(
          this.selectedObjectGUI,
          'emissionRate', 0, 10000).name('Emission Rate').
          onChange(() => {
            this.selectedObjectGUI.update()
          })

        emitterFolder.add(
          this.selectedObjectGUI,
          'spread', 0.0, 10 * Math.PI / 180).name('Spread').
          onChange(() => {
            this.selectedObjectGUI.update()
          })

        emitterFolder.add(
          this.selectedObjectGUI,
          'velocity', 0.1, 300).name('Particles Velocity').
          onChange(() => {
            this.selectedObjectGUI.update()
          })

        var chargeCtrl = emitterFolder.add(
          this.selectedObjectGUI,
          'charge', -200, 200).name('Particles Charge')

        chargeCtrl.onChange((value) => {

          this.selectedObjectGUI.update()

          this.emit('objectModified', {
            property: 'charge',
            value: value,
            object: obj
          })
        })

        emitterFolder.open()
        break

      case 1:

        this.selectedObjectGUI = new GUIObjectAdapter(
          this.particleSystem.getMagneticField(obj.getId()), {
            force: {
              getter: 'getForce',
              setter: 'setForce'
            }
          })

        var fieldFolder = gui.addFolder('Field Settings')

        var forceCtrl = fieldFolder.add(
          this.selectedObjectGUI,
          'force', -10000, 10000).name('Force')

        forceCtrl.onChange((value) => {

          this.selectedObjectGUI.update()

          this.emit('objectModified', {
            property: 'force',
            value: value,
            object: obj
          })
        })

        fieldFolder.open()
        break

      default:
        break
    }

    window.setTimeout(() => {
      gui.domElement.style.width = '100%'
    }, 0)

    this.setVisible(true)
  }
}