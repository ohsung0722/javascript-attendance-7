import ScheduleController from "./controller/ScheduleController.js";

class App {
  async run() {
    const scheduleController = new ScheduleController();
    scheduleController.controlSchedule();
  }
}

export default App;
