const d = document,
$nightModeBody = d.querySelector("body"),
$button = d.querySelector(".change-mode");
export default function nightMode(){
  $button.classList.toggle("translation-button")
  $nightModeBody.classList.toggle("active");
  };