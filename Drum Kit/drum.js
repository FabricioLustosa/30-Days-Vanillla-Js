window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0; //retrocede pro início
  audio.play();

  key.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //pule se não for transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
