const $scrollBar = document.querySelector(".scrollbar");
export default function scrollBar(){
    let progreso = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    $scrollBar.style.width=`calc(${progreso}vw + 5px)`;
}
