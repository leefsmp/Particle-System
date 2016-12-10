
import DockingPanel from 'DockingPanel'

export default class ConfigPanel extends DockingPanel {

  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  constructor (domContainer) {
    
    super(domContainer, 'Configuration', {
      closable: true
    })

    $(this.container).addClass('particle')
    $(this.container).addClass('config')


  }
  
  /////////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////////
  htmlContent (id) {
    
    return `
     <div class="container">

      </div>`
  }
}