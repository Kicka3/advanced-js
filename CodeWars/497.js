const button = document.querySelector('.button');

function showConsole() {
   console.log('Клик!');
   button.removeEventListener("click", showConsole);
}

button.addEventListener("click", showConsole);