document.addEventListener("DOMContentLoaded", () => {

    const box = document.getElementById("box");
    const name = document.getElementById("name");
    let isClick = false;

    box.onclick = changeBoxColor

    function changeBoxColor() {
       if (!isClick) {
          box.style.background = "#86AB89";
          name.innerHTML = "Grace Marantal Pernia";
       } else {
          box.style.background = "grey";
          name.innerHTML = "Grace M. Pernia";
       }

       isClick = !isClick;
    }

});