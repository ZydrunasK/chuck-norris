const resultDOM = document.querySelector("span");
const btnDOM = document.querySelector("button");

btnDOM.addEventListener("click", getJoke)

function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random").then(resp => resp.json()).then(data => resultDOM.innerHTML = data.value);
}