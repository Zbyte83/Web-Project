//SUBMENU(DROPDOWN-mobile)
const dropdownToggle = document.getElementById("dropdownToggle");
const icon = document.querySelector(".fa-caret-down");

dropdownToggle.addEventListener("click", () => {
    if(dropdownToggle.classList.toggle("is-active")) {
        icon.classList.replace(".fa-caret-down",".fa-caret-up");
        icon.style.transform = "rotate(-180deg)";
    } else {
        icon.classList.replace(".fa-caret-up",".fa-caret-down")
        icon.style.transform = "rotate(0deg)";
    }
});



// MENU BURGER
const btnBurger = document.getElementById("btnBurger");
const navLinks = document.getElementById("navLinks");

btnBurger.addEventListener("click", () => {
    if(navLinks.classList.toggle("is-active")) {
        btnBurger.classList.add("change");
    } else {
        btnBurger.classList.remove("change");
    };
});


// BTN THEME DE BODY
const body = document.body;
const iconTheme = document.querySelector(".fa-moon");
const btnTheme = document.getElementById("btnTheme");

// Evitar transición inicial 
document.documentElement.classList.add("noTransition");

// Aplicar tema guardado
const isDark = localStorage.getItem("theme") === "dark";
body.classList.toggle("dark", isDark);

// Sincronizar icono al cargar
iconTheme.classList.toggle("fa-sun", isDark);
iconTheme.classList.toggle("fa-moon", !isDark);

// Reactivar transiciones 
setTimeout(() => {
    document.documentElement.classList.remove("noTransition");
}, 10);

// Toggle de tema al hacer click
btnTheme.addEventListener("click", () => {
    const darkMode = body.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    // Cambiar icono según el estado actual
    iconTheme.classList.toggle("fa-sun", darkMode);
    iconTheme.classList.toggle("fa-moon", !darkMode);
});








    


    



    
