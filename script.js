document.addEventListener("DOMContentLoaded", () => {

    const box = document.getElementById("box");
    const name = document.getElementById("name");
    let isClick = false;

    box.onclick = changeBoxColor

    function changeBoxColor() {
       if (!isClick) {
          box.style.background = "#86AB89";
          name.innerHTML = "John Paul Nidua";
       } else {
          box.style.background = "grey";
          name.innerHTML = "John Paul Imperial";
       }

       isClick = !isClick;
    }

});