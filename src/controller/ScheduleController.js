import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class ScheduleController {
  #inputView;
  #outputView;
  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async controlSchedule() {
    this.#outputView.printStartMessage();
  }
}

export default ScheduleController;
