const displayTempleCard = function (temple, num) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let location = document.createElement("h2");
    let address = document.createElement("p");
    let phonenum = document.createElement("p");
    let moreInfoLink = document.createElement("a");
    let dedicationDate = document.createElement("p");
    let likeButton = document.createElement("button");
    let image = document.createElement("img");

    location.textContent = temple.location;
    address.textContent = temple.address;
    phonenum.textContent = temple.phonenum;
    moreInfoLink.setAttribute("href", temple.info)
    moreInfoLink.setAttribute("target", "blank_")
    moreInfoLink.textContent = `Closures and Services Info`;
    dedicationDate.textContent = "Dedicated " + temple.dedicated;
    likeButton.textContent = "♥";
    currentLikes = storage.getItem("likedTemples");
    if (currentLikes[num * 2] === '1') likeButton.setAttribute("class", "likebutton liked");
    else likeButton.setAttribute("class", "likebutton");

    // I would like to note that this function is an absolute disgusting mess.
    // I wish that localStorage could do more than parse strings. This was the last hope
    // I could think of to make the like buttons work with that limitation.
    likeButton.addEventListener("click", () => {
        console.log("Adding Like")
        let likes = storage.getItem("likedTemples");
        let currentLike = parseInt(likes[num * 2])
        if (currentLike === 0) {
            currentLike++;
            console.log("TRUE CASE FIRED")
            console.log(currentLike)
        }
        else {
            currentLike--;
        }
        let newLikes = [];
        for (let i = 0; i < 7; i += 2) {
            console.log(i)
            if (i === num * 2) {newLikes.push(currentLike);}
            else newLikes.push(likes[i])
        }
        console.log(newLikes)
        storage.setItem("likedTemples", newLikes)
        likeButton.classList.toggle("liked");
    })
    
    image.setAttribute("src", temple.smallimage);
    image.setAttribute("alt", temple.location + " Temple")

    card.appendChild(location);
    card.appendChild(image)
    card.appendChild(address);
    card.appendChild(phonenum);
    card.appendChild(moreInfoLink);
    card.appendChild(dedicationDate);
    card.appendChild(likeButton);
    content.appendChild(card);
}

storage = window.localStorage;
let likedList = storage.getItem("likedTemples");
console.log(likedList);
let defaultLikes = [0,0,0,0];
if (likedList === null) storage.setItem("likedTemples", defaultLikes);
const content = document.querySelector("div.temples-cards");
const requestURL = "https://carthomp.github.io/wdd230-2/data/data.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const temples = jsonObject["temples"];
    for (let i = 0; i < temples.length; i++) {
        displayTempleCard(temples[i], i);
    }
})