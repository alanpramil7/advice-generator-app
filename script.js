const adviceId = document.getElementById("advice-id");
const advice = document.querySelector(".advice-text");
const button = document.querySelector(".button");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(url, { cache: "no-cache" });
  // console.log(response);
  const data = await response.json();
  // console.log(data.slip);

  adviceId.innerHTML = data.slip.id;
  advice.innerHTML = data.slip.advice;
}

button.addEventListener("click", () => {
  getAdvice();
});
