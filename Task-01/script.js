const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeButton.textContent = "☀️";

    }else{

        themeButton.textContent = "🌙";

    }

});