// 랜덤번호 지정
// 번호를 입력 > go 버튼 누름
// 랜덤번호를 맞추면 맞췄습니다 띄우기
// 랜덤번호 < 유저번호 DOWN 띄우기
// 랜덤번호 > 유저번호 UP 띄우기
// reset 버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임이 끝남 (더이상 추측 불가, 버튼 disable)
// 1-100 범위 밖 숫자를 입력하면 알려주고 기회를 깎지 않음
// 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깎지 않음

let computerNum = 0;

let playBtn = document.getElementById("playbutton");
let userInput = document.getElementById("inputnum");
let resultArea = document.getElementById("result");

playBtn.addEventListener("click", play);

function pickRandomNum() {
  // Math.floor : 소숫점 버리기 Math.random : 랜덤한 숫자 
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    // resultArea의 text부분을 UP!으로 바꾼다
    resultArea.textContent = "UP!"
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!"
  } else {
    resultArea.textContent = "정답!"
  }
}

pickRandomNum();