import {createElement} from '../framework/render.js';


function createTaskAdderTemplate() {
    return (
        ` <div class="newtask-add-button">
            <form class="button-form">
                <h2>Новая задача</h2>
                <input class="form-text" placeholder="Название задачи">
                <button class="button-add">
                    <a href="#">
                        <p class="add-button-text">Добавить</p>
                    </a>
                </button>
            </form>
        </div>`
      );
}


export default class TaskAdder {
  getTemplate() {
    return createTaskAdderTemplate();
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
