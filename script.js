let productImg = document.getElementById("productImg");
let btns = document.querySelectorAll(".btn");

btns[0].onclick = function() {
    productImg.src = "images/image1.png";
    btns[0].classList.add("active");
    btns[1].classList.remove("active");
    btns[2].classList.remove("active");
}

btns[1].onclick = function() {
    productImg.src = "images/image2.png";
    btns[1].classList.add("active");
    btns[0].classList.remove("active");
    btns[2].classList.remove("active");
}

btns[2].onclick = function() {
    productImg.src = "images/image3.png";
    btns[2].classList.add("active");
    btns[0].classList.remove("active");
    btns[1].classList.remove("active");
}