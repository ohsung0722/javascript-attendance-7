import { Console } from "@woowacourse/mission-utils";
import { dateTime, parseDateTime } from "../utils/date.js";

class OutputView {
  printStartMessage() {
    const nowDate = parseDateTime();
    Console.print(
      `오늘은 ${nowDate.month} ${nowDate.date}일 ${nowDate.day} 입니다. 기능을 선택해 주세요.`
    );
    this.#printMenu();
  }

  #printMenu() {
    Console.print("1. 출석 확인");
    Console.print("2. 출석 수정");
    Console.print("3. 크루별 출석 기록 확인");
    Console.print("4. 제적 위험자 확인");
    Console.print("Q. 종료");
  }

  printErrorMessage(error) {
    Console.print(error);
  }
}

export default OutputView;
