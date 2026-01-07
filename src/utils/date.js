import { DateTimes } from "@woowacourse/mission-utils";

const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

export function dateTime() {
  return DateTimes.now();
}

export function parseDateTime() {
  const month = months[dateTime().getMonth()];
  const date = dateTime().getDate();
  const day = days[dateTime().getDay()];
  return { month, date, day };
}
