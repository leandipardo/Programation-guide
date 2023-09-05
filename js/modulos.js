import nightMode from "./modoNocturno.js";3
import scrollBar from "./scrollbar.js";
const d = document;
d.addEventListener("click",(e)=>{
  if(e.target.matches(".button-conteiner, .change-mode")){
    nightMode();
  }
} )
d.addEventListener("scroll",(e)=>{
  scrollBar();
})