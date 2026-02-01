const button = document.querySelector("button");

button.addEventListener("click", () => {
  const result = document.getElementById("result");
  const coin = document.getElementById("coin");

  // Reset animation
  coin.style.transition = "none";
  coin.style.transform = "rotateX(0deg)";
  coin.offsetHeight; // force reflow

  // Start animation
  coin.style.transition = "transform 1s ease-in-out";
  coin.style.transform = "rotateY(180deg)";

  // Set result
  const isHeads = Math.random() > 0.5;
  coin.src = isHeads ? "./resources/heads.svg" : "./resources/tails.svg";
  result.textContent = isHeads ? "Heads" : "Tails";
});
