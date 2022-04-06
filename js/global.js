// Nav Menu for small and medium views
const navbutton = document.getElementById("navbutton");
const navlist = document.getElementById("navlist");
navbutton.addEventListener("click", () => {
    navlist.classList.toggle("active");
    navbutton.classList.toggle("active");
    if (navlist.matches(".active")) navbutton.innerHTML = "X";
    else navbutton.innerHTML = "&#9776;";
})

// Footer Last Modified Date/Copyright Year
const currentDateAndTime = new Date();
const currentYear = currentDateAndTime.getFullYear();
const showLastModDate = document.getElementById("last-modified-date");
const currentFullDateStr = `${currentDateAndTime.getMonth() + 1}/${currentDateAndTime.getDate()}/${currentDateAndTime.getFullYear()}`
const showCopyright = document.getElementById("copyright");
showCopyright.innerHTML = "&copy;" + currentYear + " Carter Thompson"
showLastModDate.innerHTML = "Last Modified: " + currentFullDateStr;