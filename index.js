let clickCountnum = 0 ;
let clickCountnum2 = 0 ;
let clickCountnum3 = 0 ;
function clickCount(tron,vuong){
    clickCountnum++;
    console.log(clickCountnum)
    if(clickCountnum ===1 ){
        movecircle(tron,vuong)
    }else if(clickCountnum ===2){
        back(tron,vuong)
        clickCountnum=0
}
}

function clickCount2(tron,vuong){
    clickCountnum2++;
    console.log(clickCountnum)
    if(clickCountnum2 ===1 ){
        movecircle(tron,vuong)
    }else if(clickCountnum2 ===2){
        back(tron,vuong)
        clickCountnum2=0
    }
}
function clickCount3(tron,vuong){
    clickCountnum3++;
    console.log(clickCountnum)
    if(clickCountnum3 ===1 ){
        movecircle(tron,vuong)
    }else if(clickCountnum3 ===2){
        back(tron,vuong)
        clickCountnum3=0
    }
}
function movecircle( tron,vuong){
    const circle = document.getElementById(tron)
    const rectangle = document.getElementById(vuong)

    rectangle.classList.add("slide-down-rectangle")
    circle.classList.add("slide-up-circle")

}
function back( tron,vuong){
    const circle = document.getElementById(tron)
    const rectangle = document.getElementById(vuong)
    circle.classList.add("slide-back-circle")
    rectangle.classList.add("slide-up-rectangle")
    circle.classList.remove("slide-up-circle")
    rectangle.classList.remove("slide-down-rectangle")
    setTimeout(() => {
        circle.classList.remove("slide-back-circle")
        rectangle.classList.remove("slide-up-rectangle")
    }, 1000);
}
const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add("appear")
    }else{
        entry.target.classList.remove("appear")
    }
});
})
const observer2 = new IntersectionObserver((entries)=>{
entries.forEach((entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add("mem-wrap-appear")
    }else{
        entry.target.classList.remove("mem-wrap-appear")
    }
});
})

const products = [...document.querySelectorAll(".products")]
products.forEach((product)=>{
 observer.observe(product)
})
 
const memWraps = [...document.querySelectorAll(".mem-wrap")]
memWraps.forEach((memWrap)=>{
observer2.observe(memWrap)
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

