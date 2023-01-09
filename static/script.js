/* Abre e fecha menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-ex", "bi-list");
    body.classList.toggle("nav-menu-active");
}); 

/* Fecha o menu quando clicar em algum item e muda o icone para list */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("nav-menu-active")) {
           body.classList.remove("nav-menu-active")
           menuMobile.classList.replace("bi-ex", "bi-list")
        }
    })
})

//Animar todos os itens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

    item.forEach(Element => {
        if (windowTop > Element.offsetTop){
            Element.classList.add("animate");
        } else {
            Element.classList.remove("animate");
        }
    });

};

animeScroll()

window.addEventListener("scroll", ()=>{
    animeScroll();
})

// Ativar o carregamento do enviar formulario


const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')

btnEnviar.addEventListener("click", () => {
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none"
})

//tirar a mensaem depois de 5 segundos

setTimeout(()=>{
    document.querySelector('#alerta').style.display = 'none';
}, 5000)