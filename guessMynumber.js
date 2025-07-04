//1. Get all the nodes from html
const againBtn = document.querySelector(".again-btn");
const num = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".btn-check"); // Fixed class name
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

//2. Generate a random Number and score
let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let highscores = 0;

//3. checkButton Functionality
const checkFunc = () => {
  const guesss = Number(guess.value);

  //3.1 Check User has entered a number or not
  if (!guesss) {
    message.textContent = "No Value Entered";
  }

  //3.2 Check if random and guess value are equal
  else if (guesss === random) {
    message.textContent = "You won !!!";
    num.textContent = guesss;
    document.querySelector("body").style.backgroundColor = "green";

    if (scores > highscores) {
      highscores = scores;
      highscore.textContent = highscores;
    }
  }

  //3.3 If guess is wrong
  else {
    if (scores > 1) {
      message.textContent = guesss > random ? "Too Large" : "Too Low";
      scores -= 1;
      score.textContent = scores;
    } else {
      message.textContent = "You lost the game!";
      score.textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
};

checkBtn.addEventListener("click", checkFunc);

//Again Button Functionality
const againFunc = () => {
  document.querySelector("body").style.backgroundColor = "black";
  message.textContent = "Start Guessing ...";
  scores = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  score.textContent = scores;
  guess.value = "";
  num.textContent = "?";
};

againBtn.addEventListener("click", againFunc);
