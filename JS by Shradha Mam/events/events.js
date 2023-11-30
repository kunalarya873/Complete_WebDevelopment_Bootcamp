const btn = document.getElementById("btn");
let darkMode = false;
btn.onclick = () => {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? 'black': 'white';
}

