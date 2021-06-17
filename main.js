function scrl(){
    console.log("check scrl")
    window.scrollTo(0,1000)
    console.log("done")
}

function scrll(){
    console.log("check scrll")
    window.scrollTo({top:800})
}

function scrlll(){
    console.log("check scrlll")
    scrollTo(0,3000)
}

document.querySelector(".logo").addEventListener("click",scrl);
document.querySelector(".nav-itemslist").addEventListener("click",scrl);
document.querySelector(".firstChoice").addEventListener("click",scrll);