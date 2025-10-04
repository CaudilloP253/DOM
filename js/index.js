/*console.log("Hola mundo");

const product = document.getElementById("etb");
console.log(product);

const img = document.getElementsByClassName("header__logo");
console.log(img);

const tags = document.getElementsByTagName("section");
console.log(tags);

const elem = document.querySelector(".product");
console.log(elem); */

/*
const parent = document.querySelector("products__section");
const newElem = document.createElement("section");
newElem.setAttribute("class","new");

parent.append(newElem);


const logo = document.querySelector(".header__logo");

//logo.setAttribute("src", "img"); cambiar la imagen por la que se ponga en el segundo elemento entre comillas

console.log(logo.getAttribute("src"));
console.log(logo.hasAttribute("src")); //devuelve un booleano
//logo.removeAttribute("src");


//classList
//.products__section
const parent = document.querySelector(".section__item");
const parent2 = parent.firstElementChild;
const price = parent2.lastElementChild;
console.log(price);

price.classList.add("red");
price.classList.replace("red","blue");
price.classList.remove("blue");

const nov = document.getElementById("NOVEDADES");
nov.innerText = "REBAJAS";

//nov.style.backgroundColor="black";

//event listener
nov.addEventListener('click', ()=>{
    nov.classList.toggle("blue");
});
*/

const iconRemove = document.querySelectorAll(".remove");
console.log(iconRemove);

iconRemove.forEach( elem => { 
    elem.addEventListener("click", () =>{
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
})

