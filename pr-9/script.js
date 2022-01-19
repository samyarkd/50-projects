const sounds = document.querySelectorAll("audio");

sounds.forEach((sound) => {
  sound_btn = document.createElement("button");
  sound_btn.innerHTML = sound.id[0].toUpperCase() + sound.id.slice(1);

  sound_btn.addEventListener("focusin", () => {
    sound.play();
  });
  sound_btn.addEventListener("focusout", () => {
    sound.pause();
  });
  sound.addEventListener("pause", () => {
    document.activeElement.blur();
  });

  document.getElementById("buttons").appendChild(sound_btn);
});
