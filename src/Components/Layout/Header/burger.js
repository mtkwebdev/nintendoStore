export default function MenuClicker() {

    const menuMobileContainer = document.getElementsByTagName("menuMobileContainer menuMobile menuIcon")
    function toggle() {
        menuMobileContainer[0].classList.toggle("invisible");
      }
    window.onclick = function(event) {
        if (event.target.matches('.burger')) {    
            toggle()};
        if  (event.target.matches('.menuMobile')) {toggle()}
        if  (!event.target.matches('.burger'||'.menuMobile')) {menuMobileContainer[0].classList.add("invisible")}
      }};
     
     