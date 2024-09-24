import {createElement} from '../framework/render.js';


function createContainerContTemplate() {
    return (
        `<div id="main">
        
        </div>`
      );
}


export default class ContainerCont {
  getTemplate() {
    return createContainerContTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
