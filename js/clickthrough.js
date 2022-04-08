const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

let i = 0;
img1.classList.add("active");
button1.classList.add("active");
leftArrow.addEventListener("click", () => {
    if (i === 0) i = 2;
    else i--;
    switch (i) {
        case 0:
            img1.classList.add("active");
            img2.classList.remove("active");
            button1.classList.add("active");
            button2.classList.remove("active");
            break;
        case 1:
            img2.classList.add("active");
            img3.classList.remove("active");
            button2.classList.add("active");
            button3.classList.remove("active");
            break;
        case 2:
            img3.classList.add("active");
            img1.classList.remove("active");
            button3.classList.add("active");
            button1.classList.remove("active");
            break;
    }
})

rightArrow.addEventListener("click", () => {
    if (i === 2) i = 0;
    else i++;
    switch (i) {
        case 0:
            img1.classList.add("active");
            img3.classList.remove("active");
            button1.classList.add("active");
            button3.classList.remove("active");
            break;
        case 1:
            img2.classList.add("active");
            img1.classList.remove("active");
            button2.classList.add("active");
            button1.classList.remove("active");
            break;
        case 2:
            img3.classList.add("active");
            img2.classList.remove("active");
            button3.classList.add("active");
            button2.classList.remove("active");
            break;
    }

})
