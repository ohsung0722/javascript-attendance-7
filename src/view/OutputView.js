import { Console } from "@woowacourse/mission-utils";
import { dateTime, parseDateTime } from "../utils/date.js";

class OutputView {
  printStartMessage() {
    const nowDate = parseDateTime();
    Console.print(`오늘은 ${nowDate.month}월 ${nowDate.date}일 입니다.`);
  }

  printErrorMessage(error) {
    Console.print(error);
  }
}

export default OutputView;
