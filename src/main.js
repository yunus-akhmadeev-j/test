import HeaderComponent from "./view/header.js";
import FormAddTaskComponent from "./view/task-adder.js";
import TaskColumnComponent  from "./view/tasks-list-component.js";
import TaskComponent from "./view/task-component.js";
import { render, RenderPosition } from "./framework/render.js";
import TaskBasket from "./view/task-basket.js";

const numberOfStatuses = 4;
const numberOfTasks = 4;

const bodyContainer = document.querySelector("body");
const formContainer = document.querySelector(".newtask-add-button");
const basketContainer = document.querySelector(".task-basket");

const taskBoardContainer = document.querySelector(".task-body");

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TaskBasket(), basketContainer, RenderPosition.AFTERBEGIN );

for (let i = 0; i < numberOfStatuses; i++) {
  const taskColumnComponent = new TaskColumnComponent();
  render(taskColumnComponent, taskBoardContainer);

  const tasksList = document.querySelectorAll(".task-list");

  for (let j = 0; j < numberOfTasks; j++) {
    render(new TaskComponent(), tasksList[i]);
  }
}
