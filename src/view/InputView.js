import { Console } from "@woowacourse/mission-utils";

class InputView {
  async inputMenuNumber() {
    return Console.readLineAsync("");
  }

  async inputMessageParameter(parameter) {
    return Console.readLineAsync(`${parameter}message\n`);
  }
}

export default InputView;
