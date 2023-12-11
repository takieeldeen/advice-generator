import * as model from "./model";
import View from "./view";

const adviceController = async function () {
  //Store the data in the state object
  await model.getJSON();
  //render the new advice
  View.render(model.state.advice);
};

function init() {
  View.handleBtn(adviceController);
}
init();
