
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#myForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const url = form.getAttribute("action");

       
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                // Obsluga odpowiedzi z serwera
            })
            .catch((error) => {
                // Obsluga bledu
            });
    });
});


function koloruj() {
    const colore = document.getElementById("favcolor").value;
    let container = document.querySelector(".container");
    let matches = container.querySelectorAll("h4");
    for (const elem of matches) {
        elem.style.color = colore;
    }
    localStorage.setItem("websiteColor", colore);
    console.log("KOLOROWANIE");
}

function applyStoredColor() {
    const storedColor = localStorage.getItem("websiteColor");
    if (storedColor) {
        let container = document.querySelector(".container");
        let matches = container.querySelectorAll("h4");
        for (const elem of matches) {
            elem.style.color = storedColor;
        }
    }
}

function AddPerson() {
    let imie = document.getElementById("fname").value;
    let nazwisko = document.getElementById("lname").value;
    let userDesc = document.getElementById("UserDesc").innerText;

    let quoteContainer = document.querySelector(".quote-container .quote");
    let quoteItem = document.createElement("div");
    quoteItem.classList.add("quote-item");

    let author = document.createElement("h5");
    author.innerText = imie + " " + nazwisko;

    let quote = document.createElement("p");
    quote.innerText = `"${userDesc}"`;

    quoteItem.appendChild(author);
    quoteItem.appendChild(quote);
    quoteContainer.appendChild(quoteItem);

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("UserDesc").innerText = "Wprowadz cytat ...";

    koloruj();
}

$(document).ready(function() {
    let darkTheme = localStorage.getItem("darkTheme") === "true";

    function applyTheme() {
        if (darkTheme) {
            $("body").addClass("dark-theme");
        } else {
            $("body").removeClass("dark-theme");
        }
    }

    applyTheme();

    $("#toggle").click(function() {
        darkTheme = !darkTheme;
        localStorage.setItem("darkTheme", darkTheme.toString());
        applyTheme();
    });
});


function shakeH1() {
    const duration = 1000; 
    const distance = 5; 

    $("h1").css("position", "relative");

    $("h1").animate({ left: `-${distance}px` }, duration / 4)
        .animate({ left: `${distance}px` }, duration / 2)
        .animate({ left: "0" }, duration / 4);
}

$(document).ready(function() {
    shakeH1();
});

$(document).click(function() {
    shakeH1();
});