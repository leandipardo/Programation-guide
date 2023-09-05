const d = document,
nightModeBody = d.querySelector("body"),
buttonNightMode = d.querySelectorAll(".cube"),
$button = d.querySelector(".change-mode");


export default function nightMode(){
  $button.classList.toggle("translation-button")
    SwitchMode(nightModeBody);
    buttonNightMode.forEach((element) => {
      SwitchMode(element);
    });
  }
function SwitchMode(x){
  x.classList.toggle("inactive");
  x.classList.toggle("active");
}

