const circleCenter = document.getElementById("circleCenter");
const circleOne = document.getElementById("circleOne");
const circleTwo = document.getElementById("circleTwo");
const circleThree = document.getElementById("circleThree");
console.log(circleCenter);
console.log(circleOne);
console.log(circleTwo);
console.log(circleThree);

circleCenter.addEventListener("click", () => {
  circleOne.classList.add("hidden");
  circleTwo.classList.add("hidden");
  circleThree.classList.add("hidden");
  circleCenter.classList.add("hidden");
});
