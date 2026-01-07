import { Console } from "@woowacourse/mission-utils";
import { dateTime } from "../utils/date.js";

class OutputView {
  printStartMessage() {
    const nowDate = dateTime();
    Console.print(`오늘은 ${nowDate} 입니다.`);
  }

  printErrorMessage(error) {
    Console.print(error);
  }
}

export default OutputView;
