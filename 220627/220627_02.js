function solution(s) {
  let answer = s.length;

  for (let digit = 1; digit < s.length / 2 + 1; digit++) {
    const division = Math.floor(s.length / digit);
    const rest = s.length % digit;

    let arr = [];
    let prevStr = "";
    for (let i = 0; i < division; i++) {
      const str = s.slice(i * digit, i * digit + digit);
      if (!(prevStr === str)) {
        arr.push(1);
      } else {
        arr[arr.length - 1] += 1;
      }
      prevStr = str;
    }

    // digit에 따른 압축 문자열 길이 구하기, 남는 문자열 길이도 붙여주기
    let len = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 1) {
        len = len + (digit + 1);
      } else {
        len = len + digit;
      }
    }
    len = len + rest;

    answer = Math.min(answer, len);
  }

  return answer;
}
