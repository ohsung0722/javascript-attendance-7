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
    while (true) {
      this.#outputView.printStartMessage();
      const menuNumber = await this.#inputView.inputMenuNumber();
      switch (menuNumber) {
        case 1:
          await this.checkSchedule();
          break;
        case 2:
          await this.modifySchedule();
          break;
        case 3:
          await this.checkCrewSchedule();
          break;
        case 4:
          await this.dangerCrew();
          break;
        case Q:
          return;
        default:
          throw new Error("[ERROR] 잘못된 형식을 입력하였습니다.");
      }
    }
  }

  async checkSchedule() {}

  async modifySchedule() {}

  async checkCrewSchedule() {}

  async dangerCrew() {}
}

export default ScheduleController;
