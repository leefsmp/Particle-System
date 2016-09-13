/////////////////////////////////////////////////////////////////////
// Viewing.Extension.Particle
// by Philippe Leefsma, March 2016
//
/////////////////////////////////////////////////////////////////////
import TranslateTool from './Viewing.Tool.Particle.Translate'
import ParticlePanel from 'Viewing.Extension.Particle.Panel'
import ParticleTool from 'Viewing.Extension.Particle.Tool'
import ExtensionBase from 'ExtensionBase'
import Toolkit from 'ViewerToolkit'
import FPS from 'FPSMeter'
import dat from 'dat-gui'

class ParticleExtension extends ExtensionBase {

  /////////////////////////////////////////////////////////////////
  // Class constructor
  //
  /////////////////////////////////////////////////////////////////
  constructor(viewer, options) {

    super(viewer, options)

    this.options = options

    this.viewer = viewer

    this.particlePanel = null

    this.particleTool = new ParticleTool(
      this.viewer, options)

    this.viewer.toolController.registerTool(
      this.particleTool)

    this.transformTool = new TranslateTool(
      this.viewer)

    this.viewer.toolController.registerTool(
      this.transformTool)
  }

  /////////////////////////////////////////////////////////////////
  // Extension Id
  //
  /////////////////////////////////////////////////////////////////
  static get ExtensionId() {

    return 'Viewing.Extension.Particle'
  }

  /////////////////////////////////////////////////////////////////
  // Load callback
  //
  /////////////////////////////////////////////////////////////////
  load() {

    this.particleTool.loadScene().then(async () => {

      this.viewer.setProgressiveRendering(false)

      $(this.viewer.container).append(
        '<div id="particle-toolbar"> </div>')

      $('#particle-toolbar').css({
        position: 'absolute',
        left: '10px',
        top: '90px'
      })

      var fps = new FPSMeter(
        document.getElementById('particle-toolbar'), {
        maxFps:    20, //expected
        smoothing: 10,
        show: 'fps',
        decimals: 1,
        left: '0px',
        top: '-80px',
        theme: 'transparent',
        heat: 1,
        graph: 1,
        toggleOn: null,
        history: 32
      })

      this.onTxChange =
        this.onTxChange.bind(this)

      this.transformTool.on('transform.TxChange',
        this.onTxChange)

      this.onSelect =
        this.onSelect.bind(this)

      this.transformTool.on('transform.select',
        this.onSelect)

      this.particleTool.on('fps.tick',()=>{
        fps.tick()
      })

      this.viewer.toolController.activateTool(
        this.transformTool.getName())

      if(this._options.autoStart){

        this.viewer.toolController.activateTool(
          this.particleTool.getName())
      }

      this.loadPanel()
    })

    console.log('Viewing.Extension.Particle loaded')

    return true
  }

  /////////////////////////////////////////////////////////////////
  // load control panel
  //
  /////////////////////////////////////////////////////////////////
  loadPanel () {

    this.particlePanel = new ParticlePanel(
      this.particleTool,
      this.viewer,
      null)

    this.particlePanel.on('objectModified', (event) => {

      this.particleTool.onObjectModified(event)
    })

    this.particlePanel.on('maxParticles.changed', (value) => {

      if(value > 0) {

        if(!this.particleTool.active){

          this.viewer.toolController.activateTool(
            this.particleTool.getName())

        } else {

          this.particleTool.clearParticles()
        }
      }
      else {

        this.viewer.toolController.deactivateTool(
          this.particleTool.getName())
      }
    })

    this.particlePanel.on('shaders.changed', (value) => {

      this.particleTool.activateShaders(value === 'ON')
    })

    this.particlePanel.setVisible(true)
  }

  /////////////////////////////////////////////////////////////////
  // Unload callback
  //
  /////////////////////////////////////////////////////////////////
  unload() {

    $('#particle-toolbar').remove()

    if(this.particlePanel) {
  
      this.particlePanel.setVisible(false)
    }
    
    this.transformTool.off()

    this.viewer.toolController.deactivateTool(
      this.particleTool.getName())

    this.viewer.toolController.deactivateTool(
      this.transformTool.getName())

    this.particleTool.particleSystem.destroy()
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  onTxChange(txChange) {

    txChange.dbIds.forEach((dbId) => {

      this.particleTool.updateObjectPosition(dbId)
    })
  }

  /////////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////////
  onSelect(select) {

    if(select.dbIds.length) {

      var obj = this.particleTool.particleSystem.getObjectById(
        select.dbIds[0])

      if(this.particlePanel) {

        this.particlePanel.setSelected(obj)
      }

      if (obj) {

        return {
          transformable: obj.getTransformable(),
          selectable: obj.getSelectable()
        }
      }

      return { selectable: false }

    } else{

      if(this.particlePanel) {

        this.particlePanel.setSelected(null)
      }
    }
  }
}

Autodesk.Viewing.theExtensionManager.registerExtension(
  ParticleExtension.ExtensionId,
  ParticleExtension)