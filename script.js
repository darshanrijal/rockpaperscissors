let userScore = 0;
let compScore = 0;
let userscoreshtml = document.getElementById("user");
let compscoreshtml = document.getElementById("computer");

let choices = document.querySelectorAll("img");
let body = document.getElementsByTagName("body");
// const playgame = () => {
//   console.log(`user choice is ${id}`);
// };
let result = document.querySelector("#status");
const compchoice = () => {
  let option = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * 2);
  //   console.log(index);
  return option[index];
};

let showWinner = (userwin) => {
  if (userwin) {
    console.log("You Win");
    userScore++;
    userscoreshtml.innerText = userScore;
    result.innerHTML = "You Win";
    result.style.backgroundColor = "green";
  } else {
    console.log("You Lose");
    compScore++;
    compscoreshtml.innerText = compScore;
    result.innerHTML = "You lose";
    result.style.backgroundColor = "Red";
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    let id = choice.getAttribute("id");
    console.log(`${id} was clicked`);
    const computerchoice = compchoice();
    console.log(`computer choice is ${computerchoice}`);
    if (id === computerchoice) {
      result.innerHTML = "Draw";
      result.style.backgroundColor = "white";
      result.style.color = "Black";
    } else {
      let userwin = true;
      if ((id = "rock")) {
        userwin = computerchoice === "paper" ? false : true;
      } else if ((id = "paper")) {
        userwin = computerchoice === "scissor" ? false : true;
      } else {
        userwin = computerchoice === "rock" ? false : true;
      }
      showWinner(userwin);
    }
  });
});
