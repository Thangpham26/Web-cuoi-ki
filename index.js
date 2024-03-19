
const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add("appear")
    }else{
        entry.target.classList.remove("appear")
    }
});
})
const products = [...document.querySelectorAll(".products")]
products.forEach((product)=>{
 observer.observe(product)
})
function active(prop){
 const tab = document.getElementById(prop)
 tab.classList.add("active")
}
function remove(prop){
    const tab = document.getElementById(prop)
    tab.classList.remove("active")
}

function buttonclose(prop){
    const questform = document.getElementById(prop)
    questform.classList.add("content")
 
}

function openbtn(prop){
    const questform = document.getElementById(prop)
    questform.classList.remove("content")
}
function openaboutus(prop){
    const aboutusPage = document.getElementById(prop)
    aboutusPage.classList.remove("content")
}
function scrolling(){
    window.scrollTo(0,700);
}

