import { Console } from "@woowacourse/mission-utils";

class InputView {
  async inputMessage() {
    return Console.readLineAsync("message\n");
  }

  async inputMessageParameter(parameter) {
    return Console.readLineAsync(`${parameter}message\n`);
  }
}

export default InputView;
